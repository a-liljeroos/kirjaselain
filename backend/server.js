const Joi = require("joi");
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
  res.status(200).json(database.books);
});

app.post("/books/add", cors(corsOptions), (req, res) => {
  const schema = Joi.object().keys({
    id: Joi.number(),
    title: Joi.string().required().min(1),
    author: Joi.string().required().min(1),
    desc: Joi.string(),
  });

  if (schema.validate(req.body.newBook).error) {
    res.status(422).send(schema.validate(req.body).error.details);
  } else {
    var newBook = req.body.newBook;
    newBook.id = generateNewId(5, 9000000);
    database.books.push(newBook);
    res.json(database.books);
  }
});

app.delete("/books/delete", cors(corsOptions), (req, res) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
  });
  if (schema.validate(req.body.id).error) {
    res.status(422).send(schema.validate(req.body.id).error.details);
  } else {
    const bookId = req.body.id;
    const indexOfObject = database.books.findIndex((book) => {
      return book.id === bookId;
    });
    if (indexOfObject !== -1) {
      database.books.splice(indexOfObject, 1);
    }
    res.json(database.books);
  }
});

app.put("/books/put", cors(corsOptions), (req, res) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().required().min(1),
    author: Joi.string().required().min(1),
    desc: Joi.string(),
  });
  if (schema.validate(req.body.putBook).error) {
    res.status(422).send(schema.validate(req.body).error.details);
  } else {
    const modifiedBook = req.body.putBook;
    const indexOfObject = database.books.findIndex((book) => {
      return book.id === modifiedBook.id;
    });
    if (indexOfObject !== -1) {
      database.books[indexOfObject] = modifiedBook;
    }
    res.json(database.books);
  }
});

app.listen(port, () => {
  console.log("server is running at port: ", port);
});

const generateNewId = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
