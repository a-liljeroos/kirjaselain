import React, { useState, Dispatch, SetStateAction } from "react";
import { TBook } from "../../Types";
import { useDeleteBook, useAddBook, usePutBook } from "../../hooks";
import formStyles from "../styles/form.module.scss";
import bookStyles from "../styles/bookBrowser.module.scss";
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
      className={
        bookStyles.addBookForm + " " + bookStyles.addBookFormListPosition
      }
    >
      <div className={formStyles.inputContainer}>
        <label htmlFor="title">Title *</label>
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
          className={`${showError ? formStyles.requiredField : ""}`}
          required
        />
      </div>
      <div className={formStyles.inputContainer}>
        <label htmlFor="author">Author *</label>
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
          className={`${showError ? formStyles.requiredField : ""}`}
          required
        />
      </div>
      <div className={bookStyles.inputContainer}>
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
      <div className={bookStyles.buttonGroup}>
        <button
          name="save-new"
          id="save-new"
          type="submit"
          className={bookStyles.addBookFormBtn}
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
          className={bookStyles.addBookFormBtn}
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
          className={bookStyles.addBookFormBtn}
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
          className={bookStyles.addBookFormBtn}
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
