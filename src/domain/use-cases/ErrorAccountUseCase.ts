export interface IErrorsAccount {
  EmailValidator(email: string): Promise<boolean>;
}
