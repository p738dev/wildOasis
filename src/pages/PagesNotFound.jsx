import { StyledPageNotFound, Box } from "../styles/PageNotFound.css";

const PagesNotFound = () => {
  // const moveBack = useMoveBack;

  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found 😢</h1>
        <button
          // onClick={moveBack}
          size="large"
        >
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
};

export default PagesNotFound;
