export interface IUser {
  id: string;
  name: string;
  mail: string;
  phone: number;
  class: string;
  section: string;
  subjects: string[];
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  id: string;
  name: string;
  mail: string;
  phone: number;
  class: string;
  section: string;
  subjects: string[];
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: IUser) {
    this.id = data?.id;
    this.name = data?.name;
    this.mail = data?.mail;
    this.phone = data?.phone;
    this.class = data?.class;
    this.section = data?.section;
    this.subjects = data?.subjects;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
