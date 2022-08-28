import { isExists } from 'date-fns';
import Joi from 'joi';
import { UserInfo } from '../interfaces/User.interface';

export const validateFullname = (user: UserInfo): boolean => {
  const { fullname } = user;
  const { error } = Joi.object({
    fullname: Joi.string().min(3).required(),
  }).validate({ fullname });

  return !error;
};

export const validatePhone = (user: UserInfo): boolean => {
  const { phone } = user;
  const { error } = Joi.object({
    phone: Joi.number().required(),
  }).validate({ phone });

  return !error;
};

export const validateEmail = (user: UserInfo): boolean => {
  const { email } = user;
  const { error } = Joi.object({
    email: Joi.string().email().required(),
  }).validate({ email });

  return !error;
};

export const validateCPF = (user: UserInfo): boolean => {
  const { CPF } = user;
  const { error } = Joi.object({
    CPF: Joi.number().integer().required(),
  }).validate(CPF);

  if (error) return false;

  if (CPF.length !== 11) return false;

  return true;
};

export const validateRG = (user: UserInfo): boolean => {
  const { RG } = user;
  const { error } = Joi.object({
    RG: Joi.number().integer().required(),
  }).validate(RG);

  return !error;
};

export const validateBirthDate = (user: UserInfo): boolean => {
  const { birthDate } = user;
  const { error } = Joi.object({
    birthDate: Joi.string().required(),
  }).validate({ birthDate });

  if (error) return false;

  const birthDateRegex = /\d{2}\/\d{2}\/\d{4}/;
  const match = birthDate.match(birthDateRegex);

  if (!match || match[0] !== birthDate) return false;

  const [day, month, year] = birthDate.split('/');

  if (!isExists(Number(year), Number(month) - 1, Number(day))) return false;

  return true;
};

export const validatePassword = (user: UserInfo): boolean => {
  const { password } = user;
  const { error } = Joi.object({
    password: Joi.string().min(8).required(),
  }).validate({ password });

  return !error;
};

export const validatePublicPlace = (user: UserInfo): boolean => {
  const { publicPlace } = user;
  const { error } = Joi.object({
    publicPlace: Joi.string().required(),
  }).validate({ publicPlace });

  return !error;
};

export const validateAddress = (user: UserInfo): boolean => {
  const { address } = user;
  const { error } = Joi.object({
    address: Joi.string().required(),
  }).validate({ address });

  return !error;
};

export const validateHouseNumber = (user: UserInfo): boolean => {
  const { houseNumber } = user;
  const { error } = Joi.object({
    houseNumber: Joi.number().min(1).required(),
  }).validate({ houseNumber });

  return !error;
};

export const validateDistrict = (user: UserInfo): boolean => {
  const { district } = user;
  const { error } = Joi.object({
    district: Joi.string().required(),
  }).validate({ district });

  return !error;
};

export const validateCity = (user: UserInfo): boolean => {
  const { city } = user;
  const { error } = Joi.object({
    city: Joi.string().required(),
  }).validate({ city });

  return !error;
};

export const validateCEP = (user: UserInfo): boolean => {
  const { CEP } = user;
  const { error } = Joi.object({
    CEP: Joi.number().integer().required(),
  }).validate({ CEP });

  if (error) return false;

  if (String(CEP).length !== 8) return false;

  return true;
};

export const validateCommunity = (user: UserInfo): boolean => {
  const { community } = user;
  const { error } = Joi.object({
    community: Joi.string().required(),
  }).validate({ community });

  return !error;
};
