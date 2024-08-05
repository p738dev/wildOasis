import { useSearchParams } from "react-router-dom";
import { StyledFilter, FilterButton } from "../styles/Filter.css";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleFilter = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleFilter(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
