import { Model } from "sequelize";
import User from "../../models/user";
import bcrypt from 'bcrypt'

import { AddAccountModel, IAccountUseCase } from "../use-cases/AccountUseCase";
import { ErrorAccountUseCase } from "./ErrorEmailService";
import { EncrypterServices } from "../../data/Services/EncrypterServices";

export class AddAccountUseCase implements IAccountUseCase {
  async add(account: AddAccountModel): Promise<Model<any, any>> {
    try {
      const user = new ErrorAccountUseCase();
      const userAlreadyExist = await user.EmailValidator(account.email);
      const encrypt = new EncrypterServices();
      if (userAlreadyExist) {
        throw new Error("email already exist");
      }
      const hashedPassword = await encrypt.encrypt(account.password);

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
      // const user = await User.findOne({ where: { email: account.email } });
      // console.log(user)

      // const user:AddAccountModel | null = await User.findOne({ where: { email: account.email } });
      // console.log(user)

      // if (!user) {
      //   throw new Error(`email is not registered`);
      // }

      const verifyPass = await bcrypt.compare(account.password, 'salve');
      if (!verifyPass) {
        throw new Error(`Incorrectly password`);
      }

      return verifyPass;
    } catch (error) {
      throw new Error(`the error is:${error}`);
    }
  }
}
