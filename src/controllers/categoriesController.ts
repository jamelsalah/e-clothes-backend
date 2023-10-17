import { Request,Response } from "express";

const categories = [
    {type: 'gender', value: 'man'},
    {type: 'gender', value: 'woman'},
    {type: 'category', value: 'underwear'},
];


function getCategories(req:Request, res:Response) {
    res.send(categories);
}

function addCategory(req:Request, res:Response) {
    const category = req.body;
    console.log(category)

    if(category.type  &&  category.value) {
        categories.push(category);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
}

export default {
    getCategories,
    addCategory
}