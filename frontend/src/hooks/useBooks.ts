import { useQuery } from "react-query";
import { TBook } from "../Types";
import { URL } from "../constants";
import toast from "react-hot-toast";

const useBooks = () => {
  const { data, status, isError, isLoading } = useQuery<TBook[]>({
    queryKey: ["getBooks"],
    queryFn: async () => {
      const response = await fetch(`${URL}/books`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onError: (error) => {
      toast.error(`Something went wrong: ${error}`);
    },
  });

  return {
    data,
    status,
    isError,
    isLoading,
  };
};

export { useBooks };
