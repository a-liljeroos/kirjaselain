import React, { useState } from "react";
import { Form } from "../form";
import { TBook } from "../../Types";

interface IBook {
  book: TBook;
}

const Book = ({ book }: IBook) => {
  const { title, author, id } = book;
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className={`book ${openForm ? "z-index5" : ""}`}>
      <div
        className={`${openForm ? "close-book" : ""}`}
        onClick={() => {
          setOpenForm(!openForm);
        }}
      />
      {openForm && <Form book={book} setOpenForm={setOpenForm} />}

      <div
        className={`book-info ${openForm ? "book-selected" : ""}`}
        onClick={() => {
          setOpenForm(!openForm);
        }}
      >
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
      </div>
    </div>
  );
};

export { Book };
