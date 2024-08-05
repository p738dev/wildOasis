import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { createCabin } from "../../services/apiCabins";

import { StyledFormRow, StyledLabel } from "../../styles/CabinForm.css";
import { Form } from "../../styles/Form.css";
import { Button } from "../../styles/Button.css";
import { Textarea } from "../../styles/Textarea.css";
import { StyledInput } from "../../styles/FileInput.css";

const EditCabinForm = ({ cabinToEdit = {} }) => {
  const { id: editID, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editID);

  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Nowe mieszkanie utworzone pomyślnie.");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleAddCabin = (data) => {
    mutate({ ...data, image: data.image[0] });
  };

  return (
    <Form onSubmit={handleSubmit(handleAddCabin)}>
      <StyledFormRow>
        <StyledLabel htmlFor="name">Nazwa</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          {...register("name")}
        />
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel htmlFor="maxCapacity">Max. ilość osób</StyledLabel>
        <StyledInput
          type="number"
          id="max_people"
          {...register("max_people")}
        />
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel htmlFor="regularPrice">Cena</StyledLabel>
        <StyledInput
          type="number"
          id="regular_price"
          {...register("regular_price")}
        />
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel htmlFor="discount">Promocjass</StyledLabel>
        <StyledInput
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel htmlFor="description">Opis</StyledLabel>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </StyledFormRow>

      <StyledFormRow>
        <StyledLabel htmlFor="image">Zdjęcie</StyledLabel>
        <StyledInput
          id="image"
          accept="image/*"
          {...register("image")}
          type="file"
        />
      </StyledFormRow>

      <StyledFormRow>
        <Button type="button">Zamknij</Button>
        <Button type="submit">Edytuj</Button>
      </StyledFormRow>
    </Form>
  );
};

export default EditCabinForm;
