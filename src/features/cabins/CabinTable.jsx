import { useCabins } from "./hooks/useCabins";

import CabinRow from "./CabinRow";
import Empty from "../../components/Empty";

import Spinner from "../../styles/Spinner.css";
import { StyledHeader, StyledTable } from "../../styles/Table.css";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  //const [searchParams] = useSearchParams();

  // const filterValue = searchParams.get("discount") || "all";

  // let filterCabins;

  // if (filterValue === "all") {
  //   filterCabins = cabins;
  // }
  // if (filterValue === "no-discount") {
  //   filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  // }
  // if (filterValue === "with-discount") {
  //   filterCabins = cabins.filter((cabin) => cabin.discount > 0);
  // }

  // const sortBy = searchParams.get("sortBy") || "start-date-asc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortCabins = cabins.sort((a, b) => (a[field] - b[field]) * modifier);

  // console.log(sortCabins);

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="mieszkań" />;

  return (
    <StyledTable role="table">
      <StyledHeader role="row">
        <div>Nazwa</div>
        <div>Pojemność</div>
        <div>Cena</div>
        <div>Opis</div>
        <div>Promocja</div>
        <div>Opcje</div>
      </StyledHeader>
      {cabins.map((cabin) => (
        <CabinRow
          cabin={cabin}
          key={cabin.id}
        />
      ))}
    </StyledTable>
  );
};

export default CabinTable;
