import React, { useState } from "react";
import { FormNoBooks } from "../form";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "../styles/bookBrowser.module.scss";

const AddBook = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className={styles.addNewBook + " " + styles.centerHor}>
      {openForm ? (
        <FormNoBooks setOpenForm={setOpenForm} />
      ) : (
        <div className={styles.addNewBookOptions + " " + styles.centerHor}>
          <h3 className={styles.addNewBookOptionsText}>Add Book</h3>
          <button
            className={styles.addNewBookButton}
            onClick={() => {
              setOpenForm(!openForm);
            }}
          >
            <AiFillPlusCircle size={40} color="white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBook;
