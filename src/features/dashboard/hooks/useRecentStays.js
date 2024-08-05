import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../../services/apiBooking";

export const useRecentStays = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  return { isLoading, stays, numDays };
};
