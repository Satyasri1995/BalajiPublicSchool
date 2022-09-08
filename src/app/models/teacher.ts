export interface ITeacher {
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

export class Teacher {
  id: string;
  name: string;
  mail: string;
  phone: number;
  class: string;
  section: string;
  subjects: string[];
  createdAt: Date;
  updatedAt: Date;
  constructor(
    data: ITeacher = {
      id: '',
      name: '',
      mail: '',
      phone: 0,
      class: '',
      section: '',
      subjects: [],
      createdAt: undefined,
      updatedAt: undefined,
    }
  ) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.mail = data.mail || '';
    this.phone = data.phone || 0;
    this.class = data.class || '';
    this.section = data.section || '';
    this.subjects = data.subjects || [];
    this.createdAt = data.createdAt || undefined;
    this.updatedAt = data.updatedAt || undefined;
  }
}
