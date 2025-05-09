import type { UsersV1DatabaseRepository } from "../../database-repository";
import { UserV1Entity } from "../../entity";
import type { ICreateUserDto } from "./dto";
import { CreateUserV1NotAllowedError, InvalidRole } from "./errors";

export class CreateUserV1UseCase {
  constructor(private readonly usersV1DatabaseRepository: UsersV1DatabaseRepository){  }

  public async execute(inputDto: ICreateUserDto){
    const id = this.usersV1DatabaseRepository.generateUniqueId();

    if(!inputDto.creatorRole){
      throw new InvalidRole()
    }

    if(inputDto.creatorRole !== 'admin'){
      throw new CreateUserV1NotAllowedError()
    }
    
    const userV1Entity = new UserV1Entity({
      ...inputDto.userData,
      id
    })

    console.log('DEBUG - DTO a ser salvo:', userV1Entity.getDto());
    return this.usersV1DatabaseRepository.create(userV1Entity.getDto())
  }
}