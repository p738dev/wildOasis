import { useState } from "react";
import Form from "../styles/Form.css";
import { StyledFormRow } from "../styles/FormRow.css";
import { StyledLabel } from "../styles/FormLabel.css";
import { StyledInput } from "../styles/FileInput.css";
import { Button } from "../styles/Button.css";
import { useUser } from "./hooks/useUser";
import { useUpdateUser } from "./hooks/useUpdateUser";

const UpdateUserDataForm = () => {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState();
  const [fullName, setFullName] = useState(currentFullName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  };

  const handleCancel = () => {
    setFullName(currentFullName);
    setAvatar(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledFormRow>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          value={email}
          disabled
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel>Imię i Nazwisko</StyledLabel>
        <StyledInput
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel>Avatar</StyledLabel>
        <StyledInput
          type="file"
          id="avatar"
          accept="image/*"
          disabled={isUpdating}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Zamknij
        </Button>
        <Button disabled={isUpdating}>Zmień dane</Button>
      </StyledFormRow>
    </Form>
  );
};

export default UpdateUserDataForm;
