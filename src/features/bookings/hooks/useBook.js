import { useQuery } from "@tanstack/react-query";

import { getBooking } from "../../../services/apiBooking";

export const useBook = (bookID) => {
  const {
    isLoading,
    data: booking = {},
    error,
  } = useQuery({
    queryKey: ["bookings", bookID],
    queryFn: () => getBooking(bookID),
    retry: false,
  });

  return { isLoading, booking, error };
};
