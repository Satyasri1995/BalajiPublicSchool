export interface ISchedule {
  id: string;
  day: number;
  period: string;
  subject: string;
  class: string;
  section: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Schedule {
  id: string;
  day: number;
  period: string;
  subject: string;
  class: string;
  section: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: ISchedule) {
    this.id = data?.id;
    this.day = data?.day;
    this.period = data?.period;
    this.subject = data?.subject;
    this.class = data?.class;
    this.section = data?.section;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
