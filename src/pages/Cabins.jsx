import CabinTable from "../features/cabins/CabinTable";

import { Row } from "../styles/Row.css";
import { Heading } from "../styles/Heading.css";

import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Mieszkania</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <AddCabin />
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
