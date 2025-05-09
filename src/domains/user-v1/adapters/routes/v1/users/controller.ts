import type { Request, Response, NextFunction } from 'express';
import { CreateUserV1UseCase } from '../../../../core/use-cases/create';
import { InMemoryUsersV1DatabaseRepository } from '../../../database-repository-memory';
import { CreateUserV1NotAllowedError, InvalidRole } from '../../../../core/use-cases/create/errors';
import { UserV1ValidationError } from '../../../../core/errors';

const usersV1DatabaseRepository = new InMemoryUsersV1DatabaseRepository();
const createUsersV1UseCase = new CreateUserV1UseCase(usersV1DatabaseRepository)

export class V1UsersController {
  constructor(){
    this.create.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction){
      const log = {
        scope: 'V1UsersController',
        method: 'create',
        steps: [] as Array<{message:string,data:unknown}>,
        message: ''
      }

     try {
      const body = req.body;
      console.log('DEBUG - Body recebido:', JSON.stringify(body));
      log.steps.push({message: 'creating user', data: body})
      const userV1Dto = await createUsersV1UseCase.execute(body);
      console.log('DEBUG - Resultado do use case:', userV1Dto);
      console.log("Success creating user", log);
      return res.status(201).json(userV1Dto);
     }catch(error){
      console.error("Error creating user", log);
      console.error('DEBUG - Erro capturado:', error, 'Tipo:', typeof error, 'Stack:', error instanceof Error ? error.stack : undefined);
       if(error instanceof InvalidRole){
         return res.status(401).json({message: error.message})
       }
       if(error instanceof UserV1ValidationError){
        return res.status(400).json({message: error.message})
       }
       if(error instanceof CreateUserV1NotAllowedError){
        return res.status(403).json({message: error.message})
       }

       return res.status(500).json({
         message: (error as any)?.message ?? String(error),
         stack: (error as any)?.stack ?? undefined,
         errorType: typeof error,
         raw: error
       })
     }
  }
}