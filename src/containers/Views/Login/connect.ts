import { useRouter } from 'next/router';
import { useState } from 'react';

export function useConnect() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = (await response.json()) as { token: string };

    localStorage.setItem('token', data.token);

    await router.push('/');
  };

  return { email, setEmail, password, setPassword, handleSubmit };
}
