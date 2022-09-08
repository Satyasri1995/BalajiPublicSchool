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
  constructor(
    data: ILeisure = {
      id: '',
      name: '',
      schedules: [],
      createdAt: undefined,
      updatedAt: undefined,
    }
  ) {
    this.id = data.id;
    this.name = data.name;
    this.schedules = data.schedules || [];
    this.createdAt = data.createdAt || undefined;
    this.updatedAt = data.updatedAt || undefined;
  }
}
