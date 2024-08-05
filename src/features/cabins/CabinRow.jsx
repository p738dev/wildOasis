import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { useCreateCabin } from "./hooks/useCreateCabin";
import { useDeleteCabin } from "./hooks/useDeleteCabin";
import { formatCurrency } from "../../utils/helpers";

import CabinForm from "./CabinForm";
import Modal from "../../components/Modal";

import {
  StyledButtonDelete,
  StyledTableDesc,
  StyledTableDiscount,
  StyledTableName,
  StyledTableOptions,
  StyledTablePrice,
  StyledTableCabinRow,
} from "../../styles/CabinRow.css";
import { Button } from "../../styles/Button.css";

const CabinRow = ({ cabin }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinID,
    name,
    max_people,
    regular_price,
    discount,
    description,
  } = cabin;

  const handleDuplicateCabin = () => {
    createCabin({
      name: `Kopia  ${name}`,
      max_people,
      regular_price,
      discount,
      description,
    });
  };

  return (
    <>
      <StyledTableCabinRow role="row">
        <StyledTableName>{name}</StyledTableName>
        <div>Pomieści: {max_people} gości</div>
        <StyledTablePrice>{formatCurrency(regular_price)}</StyledTablePrice>
        <StyledTableDesc>{description}</StyledTableDesc>
        {discount ? (
          <StyledTableDiscount>{formatCurrency(discount)}</StyledTableDiscount>
        ) : (
          <span>&mdash;</span>
        )}
        <StyledTableOptions>
          <Button
            onClick={handleDuplicateCabin}
            disabled={isCreating}
          >
            <HiSquare2Stack />
          </Button>
          <Modal>
            <Modal.Open opens="edit">
              <Button type="button">
                <HiPencil />
              </Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CabinForm cabinToEdit={cabin} />
            </Modal.Window>
          </Modal>
          <StyledButtonDelete
            onClick={() => deleteCabin(cabinID)}
            disabled={isDeleting}
            type="button"
          >
            <HiTrash />
          </StyledButtonDelete>
        </StyledTableOptions>
      </StyledTableCabinRow>
    </>
  );
};

export default CabinRow;
