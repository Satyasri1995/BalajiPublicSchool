export interface ISkool {
  id: string;
  skool: string;
  branch: string;
  regCode: number;
  postalCode: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Skool {
  id: string;
  skool: string;
  branch: string;
  regCode: number;
  postalCode: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(data?: ISkool) {
    this.id = data?.id;
    this.branch = data?.branch;
    this.skool = data?.skool;
    this.postalCode = data?.postalCode;
    this.regCode = data?.regCode;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
