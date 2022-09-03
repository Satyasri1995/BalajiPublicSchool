export interface ISkool {
  id: string;
  uid:string;
  name: string;
  branch: string;
  regCode: number;
  postalCode: number;
  address:string;
  createdAt: Date;
  updatedAt: Date;
}

export class Skool {
  id: string;
  uid:string;
  name: string;
  branch: string;
  regCode: number;
  postalCode: number;
  address:string;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: ISkool) {
    this.id = data?.id;
    this.branch = data?.branch;
    this.name = data?.name;
    this.postalCode = data?.postalCode;
    this.regCode = data?.regCode;
    this.address=data?.address;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
