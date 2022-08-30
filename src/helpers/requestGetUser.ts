import { DataUser } from '../interfaces/User.interface';

export default async (
  email: string,
  password: string,
): Promise<DataUser | boolean> => {
  const URL = 'https://evolution-community.herokuapp.com/users/login';

  try {
    const result = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const json = (await result.json()) as DataUser;

    return json;
  } catch (_err) {
    return false;
  }
};
