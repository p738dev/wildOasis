import { useParams } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBook } from "./hooks/useBook";

import { Row } from "../../styles/Row.css";
import { Heading } from "../../styles/Heading.css";
import { ButtonText } from "../../styles/ButtonText.css";
import { Button } from "../../styles/Button.css";
import { ButtonGroup } from "../../styles/ButtonGroup.css";
import { HeadingGroup } from "../../styles/HeadingGroup.css";
import { Tag } from "../../styles/Tag.css";
import Spinner from "../../styles/Spinner.css";

const BookingDetail = () => {
  const { bookID } = useParams();
  const { booking, isLoading } = useBook(bookID);

  const moveBack = useMoveBack();
  const { status } = booking;

  const statusToTagName = {
    niepotwierdzony: "blue",
    zameldowany: "green",
    wymeldowany: "silver",
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Rezerwacja #{bookID}</Heading>
          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Wstecz</ButtonText>
      </Row>

      <ButtonGroup>
        <Button
          variation="secondary"
          onClick={moveBack}
        >
          Wstecz
        </Button>
      </ButtonGroup>
    </>
  );
};

export default BookingDetail;
