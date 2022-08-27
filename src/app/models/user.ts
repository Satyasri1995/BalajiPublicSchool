export interface IUser {
  id: string;
  name: string;
  mail: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  id: string;
  name: string;
  mail: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: IUser) {
    this.id = data?.id;
    this.name = data?.name;
    this.mail = data?.mail;
    this.profile = data?.profile;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
