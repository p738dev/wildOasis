import {
  StyledConfirmDelete,
  Heading,
  Button,
} from "../styles/ConfirmDelete.css";

const ConfirmDelete = ({ resourceName, onConfirm, disabled }) => {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button disabled={disabled}>Cancel</Button>
        <Button disabled={disabled}>Delete</Button>
      </div>
    </StyledConfirmDelete>
  );
};

export default ConfirmDelete;
