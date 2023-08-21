const categories = [
    {type: 'gender', value: 'man'},
    {type: 'gender', value: 'woman'},
    {type: 'category', value: 'underwear'},
];


function getCategories(req, res) {
    res.send(categories);
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