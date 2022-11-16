import { useMutation, useQueryClient } from "react-query";
import { URL } from "../constants";
import { TBook } from "../Types";

const useAddBook = (book: TBook) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["addBook"],
    mutationFn: async () => {
      const res = await fetch(`${URL}/books/add`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newBook: book }),
      });
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries("getBooks"),
  });
  return { mutate, isLoading };
};

export { useAddBook };
