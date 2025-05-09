import type { UsersV1DatabaseRepository } from "../core/database-repository";
import type { IUserV1Dto } from "../core/entity";

export class InMemoryUsersV1DatabaseRepository implements UsersV1DatabaseRepository {
  private users: IUserV1Dto[] = [];
  private nextId = 1;

  async create(inputDto: IUserV1Dto): Promise<IUserV1Dto> {
    this.users.push(inputDto);
    return inputDto;
  }

  async findAll(): Promise<IUserV1Dto[]> {
    return this.users;
  }

  async findById(id: string): Promise<IUserV1Dto> {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return user;
  }

  generateUniqueId(): string {
    return String(this.nextId++);
  }
}
