import "./bookBrowser.scss";
import { useBooks } from "../../hooks";
import { Book } from "./Book";
import AddBook from "./AddBook";

const BookBrowser = () => {
  const { data, status, error, isLoading } = useBooks();
  if (isLoading) {
    <>Loading...</>;
  }
  if (error) {
    <div className="error-msg">Something went wrong...</div>;
  }

  if (data?.length === 0) {
    return <AddBook />;
  }

  return (
    <div className="book-browser">
      {data?.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export { BookBrowser };
