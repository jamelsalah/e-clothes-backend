import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db";
import routes from "./routes";

// import Category from './src/models/category';
// import Product from './src/models/product';

const app = express();
const port = 3001;

// const categories = [
//     {type: 'gender', name: 'man'},
//     {type: 'gender', name: 'woman'},
//     {type: 'category', name: 'underwear'},
// ];

const data = [
  {
    id: 1,
    category: "underwear",
    gender: 0,
    name: "Cueca Boxer Azul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 15.0,
    promo: 10,
    imgUrl: "",
    sizes: "{p: 10, m: 10, eg: 0, g: 10, gg: 10}",
  },
  {
    id: 2,
    category: "underwear",
    gender: 0,
    name: "Cueca Slip Preta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 49.9,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 210, eg: 120, g: 120, gg: 10}",
  },
  {
    id: 3,
    category: "underwear",
    gender: 0,
    name: "Cueca Slip Rosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    price: 49.9,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 10, eg: 10, g: 0, gg: 0}",
  },
  {
    id: 4,
    category: "underwear",
    gender: 0,
    name: "Kit Cueca Boxer Azul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    price: 50.0,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}",
  },
  {
    id: 5,
    category: "underwear",
    gender: 0,
    name: "Cueca Slip Preto Azulada Fibra",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 49.9,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}",
  },
  {
    id: 6,
    category: "underwear",
    gender: 0,
    name: "Cueca Boxer Preta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 29.9,
    promo: 10,
    imgUrl: "",
    sizes: "{p: 10, m: 20, eg: 0, g: 0, gg: 0}",
  },
  {
    id: 7,
    category: "underwear",
    gender: 0,
    name: "Kit Cueca Boxer Azul, Verde, Preta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 70.0,
    promo: 20,
    imgUrl: "",
    sizes: "{p: 30, m: 10, eg: 10, g: 10, gg: 10}",
  },
  {
    id: 8,
    category: "underwear",
    gender: 0,
    name: "Curca Slip Branca Algodão",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 149.9,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 0, eg: 10, g: 10, gg: 10}",
  },
  {
    id: 9,
    category: "underwear",
    gender: 0,
    name: "Cueca Boxer Branca ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 49.9,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}",
  },
  {
    id: 10,
    category: "underwear",
    gender: 0,
    name: "Cueca Boxer Azul Amarelada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 50.0,
    promo: 0,
    imgUrl: "",
    sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}",
  },
  {
    id: 11,
    category: "underwear",
    gender: 1,
    name: "Sutiã Preto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 39.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 30, xg: 20}",
  },
  {
    id: 12,
    category: "underwear",
    gender: 1,
    name: "Sutiã AF Rosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 49.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 30, xg: 20}",
  },
  {
    id: 13,
    category: "underwear",
    gender: 1,
    name: "Sutiã Bojo Azul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 50.0,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 30, xg: 20}",
  },
  {
    id: 14,
    category: "underwear",
    gender: 1,
    name: "Sutiã Plié Preto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 149.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 20, xg: 20}",
  },
  {
    id: 15,
    category: "underwear",
    gender: 1,
    name: "Sutiã Vermelho Bojo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 69.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 30, xg: 20}",
  },
  {
    id: 16,
    category: "underwear",
    gender: 1,
    name: "Sutã AF Daily Azul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 80.0,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 0, gg: 0, xg: 20}",
  },
  {
    id: 17,
    category: "underwear",
    gender: 1,
    name: "Sutiã Preto Trifil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 29.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 30, xg: 20}",
  },
  {
    id: 18,
    category: "underwear",
    gender: 1,
    name: "Sutiã Rosa, Vermelho, Azul C/ Bojo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 29.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 110, gg: 130, xg: 0}",
  },
  {
    id: 19,
    category: "underwear",
    gender: 1,
    name: "Sutiã Basico Azul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 150.0,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 110, gg: 30, xg: 20}",
  },
  {
    id: 20,
    category: "underwear",
    gender: 1,
    name: "sutiã Basico Preto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 49.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 130, xg: 120}",
  },
  {
    id: 21,
    category: "underwear",
    gender: 1,
    name: "Sutiã Bojo Rosa, Marrom, Vermelho",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 29.9,
    promo: 0,
    imgUrl: "",
    sizes: "{g: 10, gg: 30, xg: 0}",
  },
];

app.use(cors());
app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());

app.use("/", routes);

db.sync();

app.listen(port, () => {
  console.log(`>>>>Backend Running on Port ${port}`);
});
