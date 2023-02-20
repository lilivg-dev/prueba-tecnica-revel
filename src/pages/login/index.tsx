import { LoginLayout } from '$/containers/Layouts/LoginLayout';
import LoginView from '$/containers/Views/Login';

function LoginPage(): JSX.Element {
  return (
    <LoginLayout
      pageMetadata={{ title: 'Login', description: 'This is the Login page' }}
    >
      <LoginView />
    </LoginLayout>
  );
}

export default LoginPage;
