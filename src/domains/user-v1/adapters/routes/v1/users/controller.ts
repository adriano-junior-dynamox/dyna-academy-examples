import express from 'express'
import { CreateUserV1UseCase } from '../../../../core/use-cases/create';
import { UsersV1DatabaseRepository } from '../../../../core/database-repository';
import { MongoDbUsersV1DatabaseRepository } from '../../../database-repository-mongodb';
import { CreateUserV1NotAllowedError, InvalidRole } from '../../../../core/use-cases/create/errors';
import { UserV1ValidationError } from '../../../../core/errors';

const usersV1DatabaseRepository = new MongoDbUsersV1DatabaseRepository();
const createUsersV1UseCase = new CreateUserV1UseCase(usersV1DatabaseRepository)

export class V1UsersController {
  constructor(){
    this.create.bind(this);
  }

  async create(req:express.Request, res: express.Response, next: express.NextFunction){
      const log = {
        scope: 'V1UsersController',
        method: 'create',
        steps: [] as Array<{message:string,data:unknown}>,
        message: ''
      }

     try {
      const body = req.body;
      log.steps.push({message: 'creating user', data: {name: body.name}})
      const userV1Dto = await createUsersV1UseCase.execute(body);
      console.log("Success creating user", log);
     }catch(error){
      console.error("Success creating user", log);
       if(error instanceof InvalidRole){
         return res.status(401).json({message: error.message})
       }
       if(error instanceof UserV1ValidationError){
        return res.status(400).json({message: error.message})
       }
       if(error instanceof CreateUserV1NotAllowedError){
        return res.status(403).json({message: error.message})
       }

       return res.status(500).json({message: 'Something went wrong'})
     }
  }
}