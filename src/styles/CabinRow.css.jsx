import styled from "styled-components";

export const StyledTableCabinRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

export const StyledTableImg = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

export const StyledTableName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

export const StyledTablePrice = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

export const StyledTableDesc = styled.div`
  font-family: "Sono";
  font-weight: 400;
`;

export const StyledTableDiscount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export const StyledTableOptions = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledButtonDelete = styled.button`
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  background-color: var(--color-red-700);
  color: var(--color-brand-50);

  &:hover {
    background-color: var(--color-red-800);
  }
`;
