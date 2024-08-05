import React from "react";
import { useBookings } from "./hooks/useBookings";

import Empty from "../../components/Empty";
import BookingRow from "./BookingRow";
import Pagination from "../../components/Pagination";

import Spinner from "../../styles/Spinner.css";
import { StyledTable, StyledTableFooter } from "../../styles/Table.css";
import { StyledHeader } from "../../styles/BookingRow.css";

const BookingTable = () => {
  const { isLoading, bookings, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="rezerwacji" />;

  return (
    <StyledTable role="table">
      <StyledHeader role="row">
        <div>Mieszkanie</div>
        <div>Gość</div>
        <div>Data od:</div>
        <div>Data do:</div>
        <div>Cena dodatkowa</div>
        <div>Cena razem</div>
        <div>Ilość gości</div>
        <div>Opcje</div>
      </StyledHeader>
      {bookings.map((book) => (
        <BookingRow
          book={book}
          key={book.id}
        />
      ))}
      <StyledTableFooter>
        <Pagination count={count} />
      </StyledTableFooter>
    </StyledTable>
  );
};

export default BookingTable;
