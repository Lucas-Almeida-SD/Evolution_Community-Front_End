type Response = {
  message: string;
  error: boolean;
};

export default async (
  token: string,
): Promise<Response> => {
  const URL = 'https://evolution-community.herokuapp.com/users';

  try {
    const result = await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    if (!result.ok) {
      const json = (await result.json()) as Response;

      return json;
    }

    return { message: 'Usuário excluído!', error: false };
  } catch (err) {
    const newErr = err as Error;

    return { message: newErr.message, error: true };
  }
};
