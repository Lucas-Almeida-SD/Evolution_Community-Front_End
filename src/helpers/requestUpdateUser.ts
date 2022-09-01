import { User, UserInfo } from '../interfaces/User.interface';

export default async (
  createUser: UserInfo,
  newUser: User,
): Promise<{ message: string, error: boolean }> => {
  try {
    const newCreateUser = JSON.parse(JSON.stringify({
      ...createUser,
      birthDate: createUser.birthDate.split('-').reverse().join('/'),
    }));

    delete newCreateUser.email;

    const URL = process.env.REACT_APP_ENDPOINT_UPDATE_USER as string;

    const result = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        authorization: newUser.token,
      },
      body: JSON.stringify(newCreateUser),
    });

    const json = await result.json();

    return json as { message: string, error: boolean };
  } catch (err) {
    return { message: (err as Error).message, error: true };
  }
};
