import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "../styles/Select.css";

const Sort = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const handleChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <StyledSelect
      onChange={handleChange}
      value={sortBy}
    >
      {options.map((option) => (
        <option key={option.value}>{option.label}</option>
      ))}
    </StyledSelect>
  );
};

export default Sort;
