import React from "react";
import {
  StyledEmptyContainer,
  StyledEmptyParagraph,
} from "../styles/Empty.css";

const Empty = ({ resourceName }) => {
  return (
    <StyledEmptyContainer>
      <StyledEmptyParagraph>
        Nie znaleziono {resourceName}.
      </StyledEmptyParagraph>
    </StyledEmptyContainer>
  );
};

export default Empty;
