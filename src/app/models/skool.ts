export interface ISkool {
  id: string;
  uid: string;
  name: string;
  branch: string;
  regCode: number;
  postalCode: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Skool {
  id: string;
  uid: string;
  name: string;
  branch: string;
  regCode: number;
  postalCode: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(
    data: ISkool = {
      id: '',
      uid: '',
      name: '',
      branch: '',
      regCode: 0,
      postalCode: 0,
      address: '',
      createdAt: undefined,
      updatedAt: undefined,
    }
  ) {
    this.id = data.id || '';
    this.branch = data.branch || '';
    this.name = data.name || '';
    this.postalCode = data.postalCode || 0;
    this.regCode = data.regCode || 0;
    this.address = data.address || '';
    this.createdAt = data.createdAt || undefined;
    this.updatedAt = data.updatedAt || undefined;
  }
}
