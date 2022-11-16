import { useMutation, useQueryClient } from "react-query";
import { URL } from "../constants";
import { TBook } from "../Types";

const usePutBook = (book: TBook) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["putBook"],
    mutationFn: async () => {
      const res = await fetch(`${URL}/books/put`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ putBook: book }),
      });
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries("getBooks"),
  });
  return { mutate, isLoading };
};

export { usePutBook };
