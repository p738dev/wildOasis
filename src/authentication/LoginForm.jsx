import { useState } from "react";

import { login } from "../services/apiAuth";

import Form from "../styles/Form.css";
import { StyledInput } from "../styles/FileInput.css";
import { StyledFormRow } from "../styles/FormRow.css";
import { Button } from "../styles/Button.css";
import { StyledLabel } from "../styles/FormLabel.css";
import { useLogin } from "./hooks/useLogin";
import SpinnerMini from "../styles/Spinner.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLabel>Email</StyledLabel>
      <StyledFormRow>
        <StyledInput
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </StyledFormRow>
      <StyledLabel>Hasło</StyledLabel>
      <StyledFormRow>
        <StyledInput
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button size="large">
          {!isLoading ? "Zaloguj się" : <SpinnerMini />}
        </Button>
      </StyledFormRow>
    </Form>
  );
};

export default LoginForm;
