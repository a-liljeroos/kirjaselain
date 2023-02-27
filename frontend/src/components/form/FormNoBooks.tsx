import React, { useState, Dispatch, SetStateAction } from "react";
import { TBook } from "../../Types";
import { useAddBook } from "../../hooks";
import { validateForm } from "../validateForm";

import formStyles from "../styles/form.module.scss";
import bookStyles from "../styles/bookBrowser.module.scss";

interface IFormNoBooks {
  setOpenForm: Dispatch<SetStateAction<boolean>>;
}

const emptyForm = {
  id: 0,
  title: "",
  author: "",
  desc: "",
};

const FormNoBooks = ({ setOpenForm }: IFormNoBooks) => {
  const [bookForm, setBookForm] = useState<TBook>(emptyForm);
  const [showError, setShowError] = useState(false);
  const { mutate: addBook, isLoading: addLoading } = useAddBook(bookForm);

  const handleSubmit = () => {
    if (validateForm(bookForm)) {
      addBook();
      setShowError(false);
      setOpenForm(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
      }}
      className={bookStyles.addBookForm}
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
          className={`${showError ? formStyles.requiredField : ""}`}
          required
        />
      </div>
      <div className={formStyles.inputContainer}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={(e) => {
            setBookForm({
              ...bookForm,
              desc: e.target.value,
            });
          }}
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
            handleSubmit();
          }}
        >
          Save New
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

export { FormNoBooks };
