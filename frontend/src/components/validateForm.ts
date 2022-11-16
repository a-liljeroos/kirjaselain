import { TBook } from "../Types";

export const validateForm = ({ id, title, author, desc }: TBook): boolean => {
  if (title.length > 0 && author.length > 0) {
    return true;
  }
  return false;
};
