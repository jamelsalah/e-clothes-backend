import User from "../../models/user";
import { IErrorsAccount } from "../use-cases/ErrorAccountUseCase";

export class ErrorAccountUseCase implements IErrorsAccount {
  async EmailValidator(email: string): Promise<boolean> {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user !== null;
    } catch (error) {
      return error;
    }
  }
}
