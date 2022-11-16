import { useQuery } from "react-query";
import { TBook } from "../Types";
import { URL } from "../constants";

const useBooks = () => {
  const { data, status, error, isLoading } = useQuery<TBook[]>({
    queryKey: ["getBooks"],
    queryFn: async () => {
      const response = await fetch(`${URL}/books`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return {
    data,
    status,
    error,
    isLoading,
  };
};

export { useBooks };
