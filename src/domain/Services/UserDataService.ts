import { Model } from "sequelize";
import User from "../../models/user";
import bcrypt from "bcrypt";

import {
  AddAccountModel,
  IAddAccountUseCase,
} from "../use-cases/AccountUseCase";
import { ErrorAccountUseCase } from "./ErrorEmailService";

export class AddAccountUseCase implements IAddAccountUseCase {
  async add(account: AddAccountModel): Promise<Model<any, any>> {
    try {
      const user = new ErrorAccountUseCase();
      const userAlreadyExist = await user.EmailValidator(account.email);

      if (userAlreadyExist) {
        throw new Error("email already exist");
      }
      const hashedPassword = await bcrypt.hash(account.password, 10);

      const createdAccount = await User.create({
        name: account.name,
        email: account.email,
        password: hashedPassword,
      });

      return createdAccount;
    } catch (error) {
      throw new Error(` the error is :${error}`);
    }
  }

  async enter(account: AddAccountModel): Promise<Boolean> {
    try {
      const user = User.findOne({ where: { email: account.email } });

      if (!user) {
        throw new Error(`email is not registered`);
      }
      const verifyPass = await bcrypt.compare(account.password, user.password);
      if (!verifyPass) {
        throw new Error(`Incorrectly password`);
      }

      return verifyPass;
    } catch (error) {
      throw new Error(`the error is:${error}`);
    }
  }
}