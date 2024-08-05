import TableOperations from "../../styles/TableOperations.css";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      {/* <Filter
        filterField="discount"
        options={[
          { value: "all", label: "Wszystkie" },
          { value: "no-discount", label: "Bez promocji" },
          { value: "with-discount", label: "Z promocją" },
        ]}
      /> */}
      {/* <Sort
        options={[
          {
            value: "name-asc",
            label: "Sortuj wg. nazwy (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sortuj wg. nazwy (Z-A)",
          },
          {
            value: "regular-price-asc",
            label: "Sortuj wg. ceny rosnąco",
          },
          {
            value: "regular-price-desc",
            label: "Sortuj wg. ceny malejąco",
          },
          {
            value: "max-capacity",
            label: "Sortuj wg. max. ilość osób",
          },
        ]}
      /> */}
    </TableOperations>
  );
};

export default CabinTableOperations;
