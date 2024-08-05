import Filter from "../../components/Filter";

const DashboardFilter = () => {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Ostatnie 7 dni" },
        { value: "30", label: "Ostatnie 30 dni" },
        { value: "90", label: "Ostatnie 90 dni" },
      ]}
    />
  );
};

export default DashboardFilter;
