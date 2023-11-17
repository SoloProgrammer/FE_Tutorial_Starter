let myObj = {
    key: "valueupdated",
    key1: "value1",
}
let product = {
    name: "Dettol",
    desc: "Bimari door dettol 100%",
    images: ["", "", ""],
    price: "10rs",
    discountPercentage: 8,
    brand: "dettol",
    color: "green",
    type: "soap",
    myFunc:()=>{
        console.log("I'm inside product object");
        return 10
    },
    subdetails:{
        detail1:"This is subdetail 1",
        detail2:"This is subdetail 2",
    }
}

console.log("Product name is: ", product["name"]);
console.log(product.myFunc());

Object.freeze(product)

product.extra = "this is extra value can't be seen in the product object"

console.log(Object.entries(product));
console.log(product.hasOwnProperty("extra"));
console.log(Object.keys(product))
console.log(Object.values(product))

