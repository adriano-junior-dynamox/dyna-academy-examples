import type { UsersV1DatabaseRepository } from '../../database-repository';

export class FindAllUsersV1UseCase {
  constructor(private readonly usersV1DatabaseRepository: UsersV1DatabaseRepository) {}

  async execute() {
    return this.usersV1DatabaseRepository.findAll();
  }
}
