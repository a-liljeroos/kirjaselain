import { useMutation, useQueryClient } from "react-query";
import { URL } from "../constants";

const useDeleteBook = (bookId: number) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["deleteBook"],
    mutationFn: async () => {
      const res = await fetch(`${URL}/books/delete`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: bookId }),
      });
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries("getBooks"),
  });
  return { mutate, isLoading };
};

export { useDeleteBook };
