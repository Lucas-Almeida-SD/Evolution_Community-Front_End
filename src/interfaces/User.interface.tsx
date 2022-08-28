export interface UserInfo {
  CEP: string,
  CPF: string,
  RG: string,
  address: string,
  birthDate: string,
  city: string,
  complement: string,
  district: string,
  email: string,
  fullname: string,
  houseNumber: string,
  password: string,
  phone: string,
  community: string,
  publicPlace: string,
}

export interface User extends UserInfo {
  token: string,
}

export interface DataUser {
  data: {
    user: UserInfo,
    token: string,
  },
  error: boolean,
}

export interface UserError {
  message: string,
  error: boolean,
}
