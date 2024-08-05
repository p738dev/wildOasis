import { useForm } from "react-hook-form";

import { useCreateCabin } from "./hooks/useCreateCabin";
import { useEditCabin } from "./hooks/useEditCabin";

import { StyledLabel } from "../../styles/FormLabel.css";
import { StyledFormRow } from "../../styles/FormRow.css";
import { Form } from "../../styles/Form.css";
import { Button } from "../../styles/Button.css";
import { Textarea } from "../../styles/Textarea.css";
import { StyledInput } from "../../styles/FileInput.css";

const CabinForm = ({ cabinToEdit = {}, onCloseModal }) => {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const { id: editID, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editID);
  const isWorking = isCreating || isEditing;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const handleAddCabin = (data) => {
    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data }, id: editID },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createCabin(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(handleAddCabin)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <StyledFormRow>
        <StyledLabel htmlFor="name">Nazwa</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          {...register("name")}
          disabled={isWorking}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel htmlFor="maxCapacity">Max. ilość osób</StyledLabel>
        <StyledInput
          type="number"
          id="max_people"
          {...register("max_people")}
          disabled={isWorking}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel htmlFor="regularPrice">Cena</StyledLabel>
        <StyledInput
          type="number"
          id="regular_price"
          {...register("regular_price")}
          disabled={isWorking}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel htmlFor="discount">Promocja</StyledLabel>
        <StyledInput
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
          disabled={isWorking}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel htmlFor="description">Opis</StyledLabel>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
          disabled={isWorking}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button
          type="button"
          onClick={() => onCloseModal?.()}
        >
          Zamknij
        </Button>
        <Button
          type="submit"
          disabled={isWorking}
        >
          {isEditSession ? "Edytuj" : "Dodaj"}
        </Button>
      </StyledFormRow>
    </Form>
  );
};

export default CabinForm;
