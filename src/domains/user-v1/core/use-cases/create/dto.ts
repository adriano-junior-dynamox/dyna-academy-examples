export interface ICreateUserDto {
  creatorRole: string;
  userData: {
    name: string
    email: string
  }
}