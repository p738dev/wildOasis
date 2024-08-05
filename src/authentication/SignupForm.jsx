import React from "react";
import { useForm } from "react-hook-form";

import { useSignUp } from "./hooks/useSignUp";

import Form from "../styles/Form.css";
import { StyledFormRow } from "../styles/FormRow.css";
import { Button } from "../styles/Button.css";
import { StyledInput } from "../styles/FileInput.css";
import { StyledLabel } from "../styles/FormLabel.css";

const SignupForm = () => {
  const { signup, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = ({ fullName, email, password }) => {
    signup({ fullName, email, password }, { onSettled: () => reset });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormRow error={errors?.fullName?.message}>
        <StyledLabel>Imię i Nazwisko</StyledLabel>
        <StyledInput
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "To pole jest wymagane" })}
        />
      </StyledFormRow>
      <StyledFormRow error={errors?.email?.message}>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "To pole jest wymagane",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Proszę wprowadzić poprawny format email",
            },
          })}
        />
      </StyledFormRow>
      <StyledFormRow error={errors?.password?.message}>
        <StyledLabel>Hasło</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "To pole jest wymagane",
            minLength: {
              value: 8,
              message: "Hasło musi mieć min. 8 znaków",
            },
          })}
        />
      </StyledFormRow>
      <StyledFormRow error={errors?.passwordConfirm?.message}>
        <StyledLabel>Powtórz hasło</StyledLabel>
        <StyledInput
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "To pole jest wymagane",
            validate: (value) =>
              value === getValues().password || "Hasło musi się zgadzać",
          })}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button
          variation="secondary"
          type="reset"
        >
          Zamknij
        </Button>
        <Button>Utwórz nowego użytkownika</Button>
      </StyledFormRow>
    </Form>
  );
};

export default SignupForm;
