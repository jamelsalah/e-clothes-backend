import { Request, Response } from "express";
import { AddAccountUseCase } from "../domain/Services/UserDataService";
import bcrypt from "bcrypt";

export class SignUpController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const addAccount = new AddAccountUseCase();

      const { email, name, password } = req.body;

      const user = { email: email, name: name, password: password };

      const newUser = await addAccount.add(user);

      return res.json({ message: `${newUser}` });
    } catch (error) {
      return res.json(` error is ${error}`);
    }
  }
}
