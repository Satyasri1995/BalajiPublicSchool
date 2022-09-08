export interface ISchedule {
  id: string;
  day: number;
  period: number;
  subject: string;
  class: string;
  section: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Schedule {
  id: string;
  day: number;
  period: number;
  subject: string;
  class: string;
  section: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(
    data: ISchedule = {
      id: '',
      day: 0,
      period: 0,
      subject: '',
      class: '',
      section: '',
      createdAt: undefined,
      updatedAt: undefined,
    }
  ) {
    this.id = data.id || '';
    this.day = data.day || 0;
    this.period = data.period || 0;
    this.subject = data.subject || '';
    this.class = data.class || '';
    this.section = data.section || '';
    this.createdAt = data.createdAt || undefined;
    this.updatedAt = data.updatedAt || undefined;
  }
}
