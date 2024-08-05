import UpdatePasswordForm from "../authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../authentication/UpdateUserDataForm";

import { Heading } from "../styles/Heading.css";
import { Row } from "../styles/Row.css";

const Account = () => {
  return (
    <>
      <Heading as="h1">Edytuj swoje konto</Heading>

      <Row>
        <Heading as="h3">Edytuj swoje dane</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Edytuj hasło</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
};

export default Account;
