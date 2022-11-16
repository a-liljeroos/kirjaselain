import React, { useState, Dispatch, SetStateAction } from "react";
import { TBook } from "../../Types";
import { useDeleteBook, useAddBook, usePutBook } from "../../hooks";
import "./form.scss";
import { validateForm } from "../validateForm";

interface IForm {
  book: TBook;
  setOpenForm: Dispatch<SetStateAction<boolean>>;
}

const Form = ({ book, setOpenForm }: IForm) => {
  const { id, title, author, desc } = book;
  const [bookForm, setBookForm] = useState<TBook>({
    id: id,
    title: title,
    author: author,
    desc: desc,
  });
  const [showError, setShowError] = useState(false);

  const { mutate: deleteBook, isLoading: deleteLoading } = useDeleteBook(id);

  const { mutate: addBook, isLoading: addLoading } = useAddBook(bookForm);

  const { mutate: putBook, isLoading: putLoading } = usePutBook(bookForm);

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
      }}
      className="add-book-form add-book-form-list-position"
    >
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            setBookForm({
              ...bookForm,
              title: e.target.value,
            });
          }}
          defaultValue={bookForm.title}
          className={`${showError ? "required-field" : ""}`}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          onChange={(e) => {
            setBookForm({
              ...bookForm,
              author: e.target.value,
            });
          }}
          defaultValue={bookForm.author}
          className={`${showError ? "required-field" : ""}`}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={(e) => {
            setBookForm({
              ...bookForm,
              desc: e.target.value,
            });
          }}
          defaultValue={bookForm.desc}
        />
      </div>
      {showError && <>* please fill the required fields</>}
      <div className="button-group">
        <button
          name="save-new"
          id="save-new"
          type="submit"
          className="add-book-form-btn"
          onClick={() => {
            if (validateForm(bookForm)) {
              addBook();
              setOpenForm(false);
            } else {
              setShowError(true);
            }
          }}
        >
          Save New
        </button>

        <button
          name="save"
          type="submit"
          className="add-book-form-btn"
          onClick={() => {
            if (validateForm(bookForm)) {
              putBook();
              setOpenForm(false);
            } else {
              setShowError(true);
            }
          }}
        >
          Save
        </button>
        <button
          name="delete"
          type="submit"
          className="add-book-form-btn"
          onClick={() => {
            deleteBook();
            setOpenForm(false);
          }}
        >
          Delete
        </button>
        <button
          name="cancel"
          type="button"
          className="add-book-form-btn"
          onClick={() => {
            setOpenForm(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export { Form };
