import User from "../../models/user";

export class ErrorAccountUseCase {
  async EmailValidator(email: string): Promise<boolean> {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user !== null;
    } catch (error) {
      return error;
    }
  }
}
