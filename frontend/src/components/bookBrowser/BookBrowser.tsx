import "./bookBrowser.scss";
import { useBooks } from "../../hooks";
import { Book } from "./Book";
import AddBook from "./AddBook";
import { Toaster } from "react-hot-toast";

const BookBrowser = () => {
  const { data, status, isError, isLoading } = useBooks();

  if (isLoading) {
    <div className="error-msg">Loading...</div>;
  }

  if (isError) {
    <div className="error-msg">Something went wrong...</div>;
  }

  if (data?.length === 0) {
    return <AddBook />;
  }

  return (
    <div className="book-browser">
      <Toaster />
      {data?.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export { BookBrowser };
