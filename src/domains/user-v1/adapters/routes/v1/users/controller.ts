import type { Request, Response, NextFunction } from 'express';
import { CreateUserV1UseCase } from '../../../../core/use-cases/create';
import { JsonFileUsersV1DatabaseRepository } from '../../../database-repository-jsonfile';
import { CreateUserV1NotAllowedError, InvalidRole } from '../../../../core/use-cases/create/errors';
import { UserV1ValidationError } from '../../../../core/errors';

const usersV1DatabaseRepository = new JsonFileUsersV1DatabaseRepository();
const createUsersV1UseCase = new CreateUserV1UseCase(usersV1DatabaseRepository)

export class V1UsersController {
  constructor(){
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await usersV1DatabaseRepository.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: (error as unknown as Error)?.message ?? String(error),
        stack: (error as unknown as Error)?.stack ?? undefined,
        errorType: typeof error,
        raw: error
      });
    }
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
         message: (error as unknown as Error)?.message ?? String(error),
         stack: (error as unknown as Error)?.stack ?? undefined,
         errorType: typeof error,
         raw: error
       })
     }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    console.log('DEBUG: Entrou no findById', req.params);
    try {
      const { id } = req.params;
      const user = await usersV1DatabaseRepository.findById(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({
        message: (error as unknown as Error)?.message ?? String(error),
        stack: (error as unknown as Error)?.stack ?? undefined,
        errorType: typeof error,
        raw: error
      });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const body = req.body;
      const updated = await usersV1DatabaseRepository.update(id, body);
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(400).json({
        message: (error as unknown as Error)?.message ?? String(error),
        stack: (error as unknown as Error)?.stack ?? undefined,
        errorType: typeof error,
        raw: error
      });
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await usersV1DatabaseRepository.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({
        message: (error as unknown as Error)?.message ?? String(error),
        stack: (error as unknown as Error)?.stack ?? undefined,
        errorType: typeof error,
        raw: error
      });
    }
  }
}