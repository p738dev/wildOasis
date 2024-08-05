import { StyledDataItem, Label } from "../styles/DataItem.css";

const DataItem = ({ icon, label, children }) => {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
};

export default DataItem;
