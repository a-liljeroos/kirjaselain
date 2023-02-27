import styles from "../styles/bookBrowser.module.scss";
import { useBooks } from "../../hooks";
import { Book } from "./Book";
import AddBook from "./AddBook";
import { Toaster } from "react-hot-toast";

const BookBrowser = () => {
  const { data, status, isError, isLoading } = useBooks();

  if (isLoading) {
    <div className={styles.error}>Loading...</div>;
  }

  if (isError) {
    <div className={styles.error}>Something went wrong...</div>;
  }

  if (data?.length === 0) {
    return <AddBook />;
  }

  return (
    <div className={styles.bookBrowser}>
      <Toaster />
      {data?.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export { BookBrowser };
