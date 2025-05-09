import { IUserV1Dto } from "./entity";

export abstract class UsersV1DatabaseRepository {
   abstract create(inputDto: IUserV1Dto): Promise<IUserV1Dto>;
   abstract findById(id: string): Promise<IUserV1Dto>;
   abstract findAll(): Promise<Array<IUserV1Dto>>;
   abstract generateUniqueId():string;
}
