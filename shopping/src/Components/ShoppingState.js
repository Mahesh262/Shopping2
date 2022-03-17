const productList = [
    {
        'id':1,
        'img':"https://images.unsplash.com/photo-1647163927506-399a13f9f908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        "price":25,
        'category':"men",

    },
    {
        'id':2,
        'img':"https://images.unsplash.com/photo-1647163927506-399a13f9f908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        "price":34,
        'category':"man",

    },
    {
        'id':3,
        'img':"https://images.unsplash.com/photo-1647163927506-399a13f9f908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        "price":34,
        'category':"man",

    },

];
const  cartList =[]; 

 export var ProductState ={
     cart :cartList,
     product:productList
 }