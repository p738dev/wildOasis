import { useSettings } from "./hooks/useSettings";

import Spinner from "../../styles/Spinner.css";

import Form from "../../styles/Form.css";
import { StyledInput } from "../../styles/FileInput.css";
import { StyledFormRow } from "../../styles/FormRow.css";
import { StyledLabel } from "../../styles/FormLabel.css";
import { useUpdateSetting } from "./hooks/useEditSettings";

const UpdateSettingsForm = () => {
  const { isUpdating, updateSetting } = useUpdateSetting();
  const {
    isLoading,
    error,
    settings: {
      min_booking_length,
      max_booking_length,
      max_guest_per_booking,
      breakfast_price,
    } = {},
  } = useSettings();

  const handleUpdate = (e, field) => {
    const { value } = e.target;
    if (value) return updateSetting({ [field]: value });
  };

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <StyledFormRow>
        <StyledLabel>Min. ilość nocy/rezerwacja</StyledLabel>
        <StyledInput
          type="number"
          id="min-nights"
          defaultValue={min_booking_length}
          onBlur={(e) => handleUpdate(e, "min_booking_length")}
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel>Max. ilosć nocy/rezerwacja</StyledLabel>
        <StyledInput
          type="number"
          id="max-nights"
          defaultValue={max_booking_length}
          onBlur={(e) => handleUpdate(e, "max_booking_length")}
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel>Max. ilość gości/rezerwacja</StyledLabel>
        <StyledInput
          type="number"
          id="max-guests"
          defaultValue={max_guest_per_booking}
          onBlur={(e) => handleUpdate(e, "max_guest_per_booking")}
          disabled={isUpdating}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledLabel>Koszt śniadania</StyledLabel>
        <StyledInput
          type="number"
          id="breakfast-price"
          defaultValue={breakfast_price}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
          disabled={isUpdating}
        />
      </StyledFormRow>
    </Form>
  );
};

export default UpdateSettingsForm;
