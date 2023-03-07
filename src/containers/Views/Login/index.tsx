import { Button } from '$/components/Button';
import { Input } from '$/components/Input';

import { useConnect } from './connect';
import { Container, Form } from './styles';

function LoginView(): JSX.Element {
  const { email, setEmail, password, setPassword, handleSubmit } = useConnect();

  return (
    <Container>
      <Form onSubmit={(e) => void handleSubmit(e)}>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Username"
          label="Username"
          required
          errorMessage=""
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          label="Password"
          required
          errorMessage=""
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button label="Sign in" isFullWidth type="submit" />
      </Form>
    </Container>
  );
}

export default LoginView;
