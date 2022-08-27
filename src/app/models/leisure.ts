import { ISchedule } from './schedule';

export interface ILeisure {
  id: string;
  name: string;
  schedules: ISchedule[];
  createdAt: Date;
  updatedAt: Date;
}

export class Leisure {
  id: string;
  name: string;
  schedules: ISchedule[];
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: ILeisure) {
    this.id = data?.id;
    this.name = data?.name;
    this.schedules = data?.schedules;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
