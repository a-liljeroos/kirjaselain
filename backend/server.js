const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var { database } = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000;
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.get("/books", cors(corsOptions), (req, res) => {
  res.json(database.books);
});

app.post("/books/add", cors(corsOptions), (req, res) => {
  var newBook = req.body.newBook;
  newBook.id = generateNewId(5, 9000000);
  database.books.push(newBook);
  res.json(database.books);
});

app.delete("/books/delete", cors(corsOptions), (req, res) => {
  const bookId = req.body.id;
  const indexOfObject = database.books.findIndex((book) => {
    return book.id === bookId;
  });
  if (indexOfObject !== -1) {
    database.books.splice(indexOfObject, 1);
  }
  res.json(database.books);
});

app.put("/books/put", cors(corsOptions), (req, res) => {
  const modifiedBook = req.body.putBook;
  const indexOfObject = database.books.findIndex((book) => {
    return book.id === modifiedBook.id;
  });
  if (indexOfObject !== -1) {
    database.books[indexOfObject] = modifiedBook;
  }
  res.json(database.books);
});

app.listen(port, () => {
  console.log("server is running at port: ", port);
});

const generateNewId = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
