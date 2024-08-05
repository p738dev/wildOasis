import SignupForm from "../authentication/SignupForm";
import { Heading } from "../styles/Heading.css";

const Users = () => {
  return (
    <>
      <Heading as="h1">Utwórz nowego użytkownika</Heading>
      <SignupForm />
    </>
  );
};
export default Users;
