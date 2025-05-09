import type { UsersV1DatabaseRepository } from "../core/database-repository";
import type { IUserV1Dto } from "../core/entity";
import { promises as fs } from "node:fs";
import path from "node:path";

const USERS_FILE = path.resolve(__dirname, "users-db.json");

async function readUsers(): Promise<IUserV1Dto[]> {
  try {
    const data = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

async function writeUsers(users: IUserV1Dto[]): Promise<void> {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export class JsonFileUsersV1DatabaseRepository implements UsersV1DatabaseRepository {
  private nextId = 1;

  async create(inputDto: IUserV1Dto): Promise<IUserV1Dto> {
    const users = await readUsers();
    const id = String(this.generateUniqueId());
    const user = { ...inputDto, id };
    users.push(user);
    await writeUsers(users);
    return user;
  }

  async findAll(): Promise<IUserV1Dto[]> {
    return readUsers();
  }

  async findById(id: string): Promise<IUserV1Dto> {
    const users = await readUsers();
    const user = users.find(u => u.id === id);
    if (!user) throw new Error("User not found");
    return user;
  }

  async update(id: string, inputDto: Partial<IUserV1Dto>): Promise<IUserV1Dto> {
    const users = await readUsers();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) throw new Error("User not found");
    users[index] = { ...users[index], ...inputDto, id };
    await writeUsers(users);
    return users[index];
  }

  async delete(id: string): Promise<void> {
    const users = await readUsers();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) throw new Error("User not found");
    users.splice(index, 1);
    await writeUsers(users);
  }

  generateUniqueId(): string {
    return Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
  }
}
