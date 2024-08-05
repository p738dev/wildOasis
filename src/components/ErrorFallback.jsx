import React from "react";
import { StyledBox, StyledErrorFallback } from "../styles/ErrorFallback.css";
import { Heading } from "../styles/Heading.css";
import GlobalStyle from "../styles/globalStyle";
import { Button } from "../styles/Button.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <GlobalStyle />
      <StyledErrorFallback>
        <StyledBox>
          <Heading as="h1">Coś poszło nie tak.</Heading>
          <p>{error.message}</p>
        </StyledBox>
        <Button onClick={resetErrorBoundary}>Spróbuj ponownie</Button>
      </StyledErrorFallback>
    </>
  );
};

export default ErrorFallback;
