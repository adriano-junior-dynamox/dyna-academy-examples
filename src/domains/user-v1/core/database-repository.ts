import type { IUserV1Dto } from "./entity";

export abstract class UsersV1DatabaseRepository {
   abstract create(inputDto: IUserV1Dto): Promise<IUserV1Dto>;
   abstract findById(id: string): Promise<IUserV1Dto>;
   abstract findAll(): Promise<Array<IUserV1Dto>>;
   abstract update(id: string, inputDto: Partial<IUserV1Dto>): Promise<IUserV1Dto>;
   abstract delete(id: string): Promise<void>;
   abstract generateUniqueId():string;
}
