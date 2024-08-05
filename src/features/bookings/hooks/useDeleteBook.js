import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook as deleteBookApi } from "../../../services/apiBooking";
import toast from "react-hot-toast";

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBook } = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      toast.success("Usunięto pomyślnie.");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteBook };
};
