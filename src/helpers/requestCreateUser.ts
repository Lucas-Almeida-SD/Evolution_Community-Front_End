import { UserInfo } from '../interfaces/User.interface';

export default async (
  createUser: UserInfo,
): Promise<{ message: string, error: boolean }> => {
  try {
    const newCreateUser = JSON.parse(JSON.stringify({
      ...createUser,
      birthDate: createUser.birthDate.split('-').reverse().join('/'),
    }));

    const URL = process.env.REACT_APP_ENDPOINT_CREATE_USER as string;

    const result = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCreateUser),
    });

    const json = await result.json();

    return json as { message: string, error: boolean };
  } catch (err) {
    return { message: (err as Error).message, error: true };
  }
};
