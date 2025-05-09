import { UserV1ValidationError } from "./errors";

export interface IUserV1Dto {
  id: string;
  name: string;
  email: string;
}

export class UserV1Entity {
  private dto: IUserV1Dto;

  constructor(inputDto: IUserV1Dto){
    this.validate(inputDto);
    this.dto = inputDto;
  }

  private validate(inputDto: IUserV1Dto){
    if(!inputDto.name){
      throw new UserV1ValidationError('Name is required');
    }
    if(!inputDto.email){
      throw new UserV1ValidationError('Email is required');
    }
  }

  public getDto(): IUserV1Dto {
    return this.dto;
  }
}