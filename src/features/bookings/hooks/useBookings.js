import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBooking";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => getBookings({ page }),
  });

  return { isLoading, error, bookings, count };
};
