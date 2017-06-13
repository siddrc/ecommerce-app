var database = require("./server/database/database");
var ObjectID = require('mongodb').ObjectID;
var brandsArray = [
    "Maybeline",
    "Revlon",
    "Lakme",
    "Elle18",
    "Elle",
    "Zara",
    "Enamour",
    "Nike",
    "Colorbar",
    "M.A.C."
]
var description = "This belongs to the ladies make-up kit";
var category = "58cf7f15c13c52e8a923f8c6";
var productName = "- Make-up elements";
var itemPicsArray = [{
    "image": "women1.jpg",
    "description": description
}, {
    "image": "women2.jpg",
    "description": description
}, {
    "image": "women3.jpg",
    "description": description
}, {
    "image": "women4.jpg",
    "description": description
}, {
    "image": "women5.jpg",
    "description": description
}, {
    "image": "women6.jpg",
    "description": description
}, {
    "image": "women7.jpg",
    "description": description
}, {
    "image": "women8.jpg",
    "description": description
}, {
    "image": "women1.jpg",
    "description": description
}, {
    "image": "women2.jpg",
    "description": description
},{
    "image": "women3.jpg",
    "description": description
},{
    "image": "women4.jpg",
    "description": description
}];
var productsArray = [];
for(var operation=0 ; operation <10000;operation++){
    brandsArray.forEach(function(brand, brandIndex) {
    itemPicsArray.forEach(function(item, itemIndex) {
        var product = {};
        var randomCost = Math.floor(Math.random() * 25000);
        product = {
            "productName": brand+""+productName,
            "productDescription": item.description,
            "productCost": randomCost,
            "merchant": new ObjectID("58b1db3c616e9a49e0918125"),
            "category": new ObjectID(category),
            "image": item.image
        }
        productsArray.push(product);
    })
})
}

var dbCreateParams = {
    collectionName: "products",
    dbData: productsArray
};
dbCreateParams.callback = function() {}
database.insertMany(dbCreateParams);