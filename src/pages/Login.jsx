import LoginForm from "../authentication/LoginForm";
import Logo from "../components/Logo";

import { Heading } from "../styles/Heading.css";
import { StyledLoginLayout } from "../styles/Login.css";

const Login = () => {
  return (
    <StyledLoginLayout>
      <Logo />
      <Heading as="h4">Zaloguj się do swojego konta</Heading>
      <LoginForm />
    </StyledLoginLayout>
  );
};

export default Login;
