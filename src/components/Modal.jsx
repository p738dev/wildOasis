import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";

import { Button, Overlay, StyledModal } from "../styles/Modal.css";
import { useCLickOutside } from "../hooks/useClickOutside";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const closeModal = () => setOpenName("");
  const openModal = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, closeModal } = useContext(ModalContext);
  const ref = useCLickOutside(closeModal);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button
          type="button"
          onClick={closeModal}
        >
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
