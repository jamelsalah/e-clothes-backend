import { AddAccountUseCase } from "../domain/Services/UserDataService";

import { Request, Response } from "express";

export class SignInController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = { email: email, password: password };
    const login = new AddAccountUseCase();

    const enterUser = login.enter(user);

    return res.json({ message: `${enterUser}` });
  }
}
