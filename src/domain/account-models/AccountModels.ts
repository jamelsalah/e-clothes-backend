export interface AccountModel {
  id: string;
  name: string;
  email: string;
  password: Promise<string>;
}
export interface AddressModel {
  phone_number: string;
  adress_1: string;
  adress_2: string;
  card_1: string;
  card_2: string;
}
