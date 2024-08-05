import Modal from "../../components/Modal";
import CabinForm from "./CabinForm";

import { Button } from "../../styles/Button.css";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Dodaj nowe mieszkanie</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
