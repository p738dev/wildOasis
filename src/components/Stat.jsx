import {
  StyledIcon,
  StyledStat,
  StyledTitle,
  StyledValue,
} from "../styles/Stat.css";

const Stat = ({ color, icon, title, value }) => {
  return (
    <StyledStat>
      <StyledIcon color={color}>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledValue>{value}</StyledValue>
    </StyledStat>
  );
};

export default Stat;
