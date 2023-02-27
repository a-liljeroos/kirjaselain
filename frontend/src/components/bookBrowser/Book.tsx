import React, { useState } from "react";
import { Form } from "../form";
import { TBook } from "../../Types";
import styles from "../styles/bookBrowser.module.scss";
interface IBook {
  book: TBook;
}

const Book = ({ book }: IBook) => {
  const { title, author, id } = book;
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className={`${styles.book} ${openForm ? styles.zIndex5 : ""}`}>
      <div
        className={`${openForm ? "close-book" : ""}`}
        onClick={() => {
          setOpenForm(!openForm);
        }}
      />
      {openForm && <Form book={book} setOpenForm={setOpenForm} />}

      <div
        className={`${styles.bookInfo} ${openForm ? styles.bookSelected : ""}`}
        onClick={() => {
          setOpenForm(!openForm);
        }}
      >
        <h3 className={styles.bookTitle}>{title}</h3>
        <h4 className={styles.bookAuthor}>{author}</h4>
      </div>
    </div>
  );
};

export { Book };
