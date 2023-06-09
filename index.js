const express = require('express')
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const categories = [
    {type: 'gender', value: 'man'},
];

const data = [
    {id: 1, category: "underwear", gender: "man", name: "Cueca Boxer Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "15,00", promo: 10, imgUrl: "", sizes: {p: [true, 10], m: [true, 10], eg: [false, 0], g: [true, 10], gg: [true, 10]}},
    {id: 2, category: "underwear", gender: "man", name: "Cueca Slip Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "49,90", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [true, 210], eg: [true, 120], g: [true, 120], gg: [true, 10]}},
    {id: 3, category: "underwear", gender: "man", name: "Cueca Slip Rosa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", price: "49,90", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [true, 10], eg: [true, 10], g: [false, 0], gg: [false, 0]}},
    {id: 4, category: "underwear", gender: "man", name: "Kit Cueca Boxer Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", price: "50,00", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [true, 10], eg: [true, 10], g: [true, 10], gg: [true, 10]}},
    {id: 5, category: "underwear", gender: "man", name: "Cueca Slip Preto Azulada Fibra", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", price: "49,90", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [true, 10], eg: [true, 10], g: [true, 10], gg: [true, 10]}},
    {id: 6, category: "underwear", gender: "man", name: "Cueca Boxer Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "29,90", promo: 10, imgUrl: "", sizes: {p: [true, 10], m: [true, 20], eg: [false, 0], g: [false, 0], gg: [false, 0]}},
    {id: 7, category: "underwear", gender: "man", name: "Kit Cueca Boxer Azul, Verde, Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "70,00", promo: 20, imgUrl: "", sizes: {p: [true, 30], m: [true, 10], eg: [true, 10], g: [true, 10], gg: [true, 10]}},
    {id: 8, category: "underwear", gender: "man", name: "Curca Slip Branca Algodão", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "149,90", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [false, 0], eg: [true, 10], g: [true, 10], gg: [true, 10]}},
    {id: 9, category: "underwear", gender: "man", name: "Cueca Boxer Branca ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "49,90", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [true, 10], eg: [true, 10], g: [true, 10], gg: [true, 10]}},
    {id: 10, category: "underwear", gender: "man", name: "Cueca Boxer Azul Amarelada", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: "50,00", promo: 0, imgUrl: "", sizes: {p: [true, 10], m: [true, 10], eg: [true, 10], g: [true, 10], gg: [true, 10]}},
    {id: 11, category: "underwear", gender: "woman", name: "Sutiã Preto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "39,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 30], xg: [true, 20]}},
    {id: 12, category: "underwear", gender: "woman", name: "Sutiã AF Rosa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "49,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 30], xg: [true, 20]}},
    {id: 13, category: "underwear", gender: "woman", name: "Sutiã Bojo Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "50,00", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 30], xg: [true, 20]}},
    {id: 14, category: "underwear", gender: "woman", name: "Sutiã Plié Preto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "149,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 20], xg: [true, 20]}},
    {id: 15, category: "underwear", gender: "woman", name: "Sutiã Vermelho Bojo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "69,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 30], xg: [true, 20]}},
    {id: 16, category: "underwear", gender: "woman", name: "Sutã AF Daily Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "80,00", promo: 0, imgUrl: "", sizes: {g: [false, 0], gg: [false, 0], xg: [true, 20]}},
    {id: 17, category: "underwear", gender: "woman", name: "Sutiã Preto Trifil", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "29,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 30], xg: [true, 20]}},
    {id: 18, category: "underwear", gender: "woman", name: "Sutiã Rosa, Vermelho, Azul C/ Bojo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "29,90", promo: 0, imgUrl: "", sizes: {g: [true, 110], gg: [true, 130], xg: [false, 0]}},
    {id: 19, category: "underwear", gender: "woman", name: "Sutiã Basico Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "150,00", promo: 0, imgUrl: "", sizes: {g: [true, 110], gg: [true, 30], xg: [true, 20]}},
    {id: 20, category: "underwear", gender: "woman", name: "sutiã Basico Preto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "49,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 130], xg: [true, 120]}},
    {id: 21, category: "underwear", gender: "woman", name: "Sutiã Bojo Rosa, Marrom, Vermelho", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: "29,90", promo: 0, imgUrl: "", sizes: {g: [true, 10], gg: [true, 30], xg: [false, 0]}}
]

app.get('/home', (req, res) => {
    const category = req.query.category;
    const gender = req.query.gender;
    console.log(category);
    console.log(gender)

    const newData = [...data];

    if(category) {
        for(let i = newData.length-1; i >= 0; i--) {
            if(newData[i].category !== category) newData.splice(i, 1);
        }
    } 

    if(gender) {
        for(let i = newData.length-1; i >= 0; i--) {
            if(newData[i].gender !== gender) newData.splice(i, 1);
        }
    }

    res.send(newData);
});

// app.get('/man', (req, res) => {
//     var newData = [];
    
//     data.map((product) => {
//         if(product.gender === "man") newData.push(product);
//     })

//     res.send(newData)
// });

// app.get('/woman', (req, res) => {
//     var newData = [];
    
//     data.map((product) => {
//         if(product.gender === "woman") newData.push(product);
//     });

//     res.send(newData);
// });

// app.get('/underwear', (req, res) => {
//     var newData = [];
    
//     data.map((product) => {
//         if(product.category === "underwear") newData.push(product);
//     })

//     res.send(newData);
// });

// app.get('/pants', (req, res) => {
//     var newData = [];
    
//     data.map((product) => {
//         if(product.gender === "pant") newData.push(product);
//     })

//     res.send(newData);
// });

// app.get('/t_shirts', (req, res) => {
//     var newData = [];
    
//     data.map((product) => {
//         if(product.gender === "t_shirt") newData.push(product);
//     })

//     res.send(newData);
// });

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.post('/categories/add_category', (req, res) => {
    const category = req.body;
    console.log(category)

    if(category.type  &&  category.value) {
        categories.push(category);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.get('/add_product', (req, res) => {
    res.send({
        genders: ["man", "woman"],
        categories: categories
    });
});

app.post('/add_product', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`>>>>Backend Running on Port ${port}`);
});