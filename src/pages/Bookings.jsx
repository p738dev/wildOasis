import BookingTable from "../features/bookings/BookingTable";
import { Heading } from "../styles/Heading.css";
import { Row } from "../styles/Row.css";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Rezerwacje</Heading>
      </Row>
      <BookingTable />
    </>
  );
};

export default Bookings;
