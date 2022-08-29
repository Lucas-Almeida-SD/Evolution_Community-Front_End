import { isExists } from 'date-fns';
import { UserInfo } from '../interfaces/User.interface';

const validateString = (string: string): boolean => {
  if (string[0] === ' ' || string[string.length - 1] === ' ') return false;

  const regex = /[a-zA-zà-úÀ-Ú\s]{1,}/;
  const match = string.match(regex);

  if (!match || match[0] !== string) return false;

  return true;
};

const validateNumber = (string: string): boolean => {
  if (string[0] === ' ' || string[string.length - 1] === ' ') return false;

  const regex = /[0-9]{1,}/;
  const match = string.match(regex);

  if (!match || match[0] !== string) return false;

  return true;
};

export const validateFullname = (user: UserInfo): boolean => {
  const { fullname } = user;

  if (!validateString(fullname)) return false;

  if (fullname.length < 3) return false;

  return true;
};

export const validatePhone = (user: UserInfo): boolean => {
  const { phone } = user;

  if (!validateNumber(phone)) return false;

  if (phone.length === 0) return false;

  return true;
};

export const validateEmail = (user: UserInfo): boolean => {
  const { email } = user;

  const regex = /[a-zA-z0-9._]{1,}@[a-zA-z]{1,}\.[a-zA-z]{1,}/;
  const match = email.match(regex);

  if (!match || match[0] !== email) return false;

  if (email.length === 0) return false;

  return true;
};

export const validateCPF = (user: UserInfo): boolean => {
  const { CPF } = user;

  if (!validateNumber(CPF)) return false;

  if (CPF.length !== 11) return false;

  return true;
};

export const validateRG = (user: UserInfo): boolean => {
  const { RG } = user;

  if (!validateNumber(RG)) return false;

  if (RG.length === 0) return false;

  return true;
};

export const validateBirthDate = (user: UserInfo): boolean => {
  let { birthDate } = user;

  birthDate = birthDate.split('-').reverse().join('/');

  if (birthDate.length === 0) return false;

  const birthDateRegex = /\d{2}\/\d{2}\/\d{4}/;
  const match = birthDate.match(birthDateRegex);

  if (!match || match[0] !== birthDate) return false;

  const [day, month, year] = birthDate.split('/');

  if (!isExists(Number(year), Number(month) - 1, Number(day))) return false;

  return true;
};

export const validatePassword = (user: UserInfo): boolean => {
  const { password } = user;

  if (password[0] === ' ' || password[password.length - 1] === ' ') return false;

  if (password.length < 8) return false;

  return true;
};

export const validatePublicPlace = (user: UserInfo): boolean => {
  const { publicPlace } = user;

  if (!validateString(publicPlace)) return false;

  if (publicPlace.length === 0) return false;

  return true;
};

export const validateAddress = (user: UserInfo): boolean => {
  const { address } = user;

  if (!validateString(address)) return false;

  if (address.length === 0) return false;

  return true;
};

export const validateHouseNumber = (user: UserInfo): boolean => {
  const { houseNumber } = user;

  if (!validateNumber(houseNumber)) return false;

  if (Number(houseNumber) <= 0) return false;

  return true;
};

export const validateDistrict = (user: UserInfo): boolean => {
  const { district } = user;

  if (!validateString(district)) return false;

  if (district.length === 0) return false;

  return true;
};

export const validateCity = (user: UserInfo): boolean => {
  const { city } = user;

  if (!validateString(city)) return false;

  if (city.length === 0) return false;

  return true;
};

export const validateCEP = (user: UserInfo): boolean => {
  const { CEP } = user;

  if (!validateNumber(CEP)) return false;

  if (String(CEP).length !== 8) return false;

  return true;
};

export const validateCommunity = (user: UserInfo): boolean => {
  const { community } = user;

  if (!validateString(community)) return false;

  if (community.length === 0) return false;

  return true;
};
