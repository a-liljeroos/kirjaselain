import React, { useState } from "react";
import { FormNoBooks } from "../form";
import { AiFillPlusCircle } from "react-icons/ai";

const AddBook = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="add-new-book center-hor">
      {openForm ? (
        <FormNoBooks setOpenForm={setOpenForm} />
      ) : (
        <div className="add-new-book-options center-hor">
          <h3 className="add-new-book-options-text">Add Book</h3>
          <button
            className="add-new-book-button"
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
