import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./hooks/useUpdateUser";

import Form from "../styles/Form.css";
import { StyledFormRow } from "../styles/FormRow.css";
import { StyledInput } from "../styles/FileInput.css";
import { Button } from "../styles/Button.css";
import { StyledLabel } from "../styles/FormLabel.css";

const UpdatePasswordForm = () => {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  const onSubmit = ({ password }) => {
    updateUser({ password }, { onSuccess: reset });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormRow error={errors?.password?.message}>
        <StyledLabel>Nowe hasło</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "To pole jest wymagane.",
            minLength: {
              value: 8,
              message: "Hasło musi mieć min. 8 znaków.",
            },
          })}
        />
      </StyledFormRow>

      <StyledFormRow error={errors?.passwordConfirm?.message}>
        <StyledLabel>Powtórz nowe hasło</StyledLabel>
        <StyledInput
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "To pole jest wymagane.",
            validate: (value) =>
              getValues().password === value || "Hasła muszą być takie same.",
          })}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
        >
          Zamknij
        </Button>
        <Button disabled={isUpdating}>Zmień hasło</Button>
      </StyledFormRow>
    </Form>
  );
};

export default UpdatePasswordForm;
