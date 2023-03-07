export const fetchApi = async (url: string, initializer?: RequestInit) => {
  const token = localStorage.getItem('token') as string;

  const response = await fetch(`${url}`, {
    ...initializer,
    headers: {
      ...initializer?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};
