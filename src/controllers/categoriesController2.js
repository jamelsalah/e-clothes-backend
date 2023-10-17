const categories = [
    {type: 'gender', value: 'man'},
    {type: 'gender', value: 'woman'},
    {type: 'category', value: 'underwear'},
];

import Category from '../models/category.js';


async function getCategories(req, res) {
    const categories = await Category.findAll().then((result) => {
        return {success: true, dataValues: result};
    }).catch((error) => {
        return {success: false, error};
    })
    
    if(categories.success) {
        var sanitizedCategories = [];

        for(let i in categories.dataValues) {
            sanitizedCategories.push(categories.dataValues[i].dataValues)
        }
        console.log(sanitizedCategories)
        res.send(sanitizedCategories);
    }
}

function addCategory(req, res) {
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