import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { Heading } from "../styles/Heading.css";
import { Row } from "../styles/Row.css";

const Settings = () => {
  return (
    <Row>
      <Heading as="h1">Zmień ustawienia hotelowe</Heading>
      <UpdateSettingsForm />
    </Row>
  );
};

export default Settings;
