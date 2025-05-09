import type { UsersV1DatabaseRepository } from "../core/database-repository";
import type { IUserV1Dto } from "../core/entity";

export class MongoDbUsersV1DatabaseRepository implements UsersV1DatabaseRepository{
  create(inputDto: IUserV1Dto): Promise<IUserV1Dto> {
    throw Error('Not implemented')
  }

  findAll(): Promise<IUserV1Dto[]> {
    throw Error('Not implemented')
  }

  findById(id: string): Promise<IUserV1Dto> {
    throw Error('Not implemented')
  }

  generateUniqueId(): string {
    throw Error('Not implemented')
  }
}