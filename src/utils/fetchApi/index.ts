export const fetchApi = async (url: string) => {
  const token = localStorage.getItem('token') as string;

  const response = await fetch(`${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};
