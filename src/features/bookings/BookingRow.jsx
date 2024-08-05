import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useDeleteBook } from "./hooks/useDeleteBook";
import { formatCurrency } from "../../utils/helpers";
import { CiMenuKebab } from "react-icons/ci";
import { HiTrash } from "react-icons/hi";

import {
  StyledMenusButton,
  StyledTableBookingRow,
  StyledTableCabin,
  StyledTableDates,
  StyledTableGuest,
  StyledTablePrice,
} from "../../styles/BookingRow.css";

const BookingRow = ({ book }) => {
  const navigate = useNavigate();
  const { isDeleting, deleteBook } = useDeleteBook();

  const {
    id: bookID,
    cabins: { name: cabin_name },
    guests: { full_name: guest_name, email },
    start_date,
    end_date,
    num_guests,
    total_price,
    extras_price,
  } = book;

  return (
    <StyledTableBookingRow role="row">
      <StyledTableCabin>{cabin_name}</StyledTableCabin>
      <StyledTableGuest>
        {guest_name} <span>{email}</span>
      </StyledTableGuest>
      <StyledTableDates>
        {format(new Date(start_date), "MMMM dd, yyyy")}
      </StyledTableDates>
      <StyledTableDates>
        {format(new Date(end_date), "MMMM dd, yyyy")}
      </StyledTableDates>
      {extras_price ? (
        <StyledTablePrice>{formatCurrency(extras_price)}</StyledTablePrice>
      ) : (
        <span>&mdash;</span>
      )}
      <StyledTablePrice>{formatCurrency(total_price)}</StyledTablePrice>
      <StyledTableGuest>{num_guests}</StyledTableGuest>
      <div>
        <StyledMenusButton onClick={() => navigate(`/book/${bookID}`)}>
          <CiMenuKebab />
        </StyledMenusButton>
        <StyledMenusButton
          type="button"
          onClick={() => deleteBook(bookID)}
          disabled={isDeleting}
        >
          <HiTrash />
        </StyledMenusButton>
      </div>
    </StyledTableBookingRow>
  );
};

export default BookingRow;
