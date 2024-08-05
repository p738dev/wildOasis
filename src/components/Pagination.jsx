import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { PAGE_SIZE } from "../utils/constans";

import {
  Buttons,
  PaginationButton,
  StyledPage,
  StyledPagination,
} from "../styles/Pagination.css";

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <StyledPage>
        Wyświetl <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> do{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        z <span>{count}</span> wyników
      </StyledPage>
      <Buttons>
        <PaginationButton
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Poprzedni</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Następny</span> <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};

export default Pagination;
