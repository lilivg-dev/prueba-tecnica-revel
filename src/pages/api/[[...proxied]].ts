import type { NextApiRequest, NextApiResponse } from 'next';

const proxyUrl = 'https://kata.conducerevel.com/films/';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { proxied } = req.query as { proxied: string[] | string | undefined };

  if (!proxied) {
    res.status(500);
  }

  const url = `${proxyUrl}${
    Array.isArray(proxied) ? proxied.join('/') : proxied
  }`;

  const pluckedHeaders = {
    'Content-Type': req.headers['content-type'],
    Authorization: req.headers.authorization,
  } as Record<string, string>;

  const headers = new Headers(pluckedHeaders);

  if (req.method === 'GET') {
    const response = await (await fetch(url, { headers })).json();
    res.status(200).json(response);
  } else {
    const response = await (
      await fetch(url, {
        method: 'POST',
        headers,
        body: req.body,
      })
    ).json();
    res.status(200).json(response);
  }
}
