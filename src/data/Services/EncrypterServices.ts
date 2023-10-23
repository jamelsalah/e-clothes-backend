import { IEncrypter } from "../use-cases/EncrypterUseCase";
import bcrypt from "bcrypt";
export class EncrypterServices implements IEncrypter {
  encrypt(password: string): Promise<string> {
    const hashedPassword = bcrypt.hash(password, 8);

    return hashedPassword;
  }
}
