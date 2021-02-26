import { User } from './user.model';

export class Company {
  constructor(
    public id: number,
    public name: string,
    public cNPJ: string,
    public users: User[]
  ) {}
}
