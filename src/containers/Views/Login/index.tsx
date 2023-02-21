import { Button } from '$/components/Button';
import { Input } from '$/components/Input';

import { Container, Form } from './styles';

function LoginView(): JSX.Element {
  return (
    <Container>
      <Form>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          label="Username"
          required
          errorMessage=""
          onChange={() => {}}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
          required
          errorMessage=""
          onChange={() => {}}
        />
        <Button label="Sign in" isFullWidth />
      </Form>
    </Container>
  );
}

export default LoginView;
