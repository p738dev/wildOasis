import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export const useSignUp = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Konto utworzono pomyślnie! Proszę zweryfikować nowe konto na podanym adresie e-mail."
      );
    },
  });

  return { signup, isLoading };
};
