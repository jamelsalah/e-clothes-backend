import { Model } from "sequelize";

export interface AddAccountModel {
  name: string;
  email: string;
  password: string;
}

export interface IAccountUseCase {
  add(account: AddAccountModel): Promise<Model<any, any>>;
  enter(account: AddAccountModel): Promise<Boolean>;
}
