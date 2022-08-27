export interface UserInfo {
  CEP: number,
  CPF: number
  RG: number,
  address: string,
  birthDate: string,
  city: string,
  complement: string,
  district: string,
  email: string,
  fullname: string,
  houseNumber: number,
  password: string,
  phone: number,
  plan: string,
  publicPlace: string,
}

export interface User extends UserInfo {
  token: string,
}

export interface DataUser {
  data: {
    user: UserInfo,
    token: string,
  }
}

export interface UserError {
  message: string,
  error: boolean,
}
