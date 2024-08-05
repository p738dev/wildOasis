import styled from "styled-components";

export const StyledSalesChart = styled.div`
  grid: 1 / -1;
  & .recharts-cartesian-grid-horizontal line-height,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;
