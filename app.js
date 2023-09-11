let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: 'CAFE AMERICANO',
        price: 70
    },
    {
        id: 2,
        name: 'ICED COFFEE',
        price: 75
    },
    {
        id: 3,
        name: 'CARAMEL MACCHIATO',
        price: 95
    },
    {
        id: 4,
        name: 'SPANISH LATTE',
        price: 90
    },
    {
        id: 5,
        name: 'ICED LATTE',
        price: 90
    },
    {
        id: 6,
        name: 'SALTED CARAMEL',
        price: 95
    },
    {
        id: 7,
        name: 'COFFEE CARAMEL',
        price: 95
    },
    {
        id: 8,
        name: 'COFFEE HAZELNUT',
        price: 95
    },
    {
        id: 9,
        name: 'WHITE CHOCOLATE MACCHIATO',
        price: 105
    },
    {
        id: 10,
        name: 'ICED MOCHA',
        price: 105
    },
    {
        id: 11,
        name: 'COFFEE ALMOND',
        price: 95
    },
    {
        id: 12,
        name: 'KOPI VIENNA',
        price: 105
    },
    {
        id: 12,
        name: 'SIGNATURE CHOCOLATE',
        price: 105
    },
    {
        id: 12,
        name: 'NUTELLA HAZELNUT',
        price: 135
    },
    {
        id: 12,
        name: 'JAVA CHIPS',
        price: 135
    },
    {
        id: 12,
        name: 'PEPPERMINT MOCHA',
        price: 135
    },
    {
        id: 12,
        name: 'BUTTER BEER',
        price: 115
    },
    {
        id: 12,
        name: 'STRAWBERRY YOGURT',
        price: 125
    },
    {
        id: 12,
        name: 'MANGO LATTE',
        price: 135
    },
    {
        id: 12,
        name: 'STRAWBERRY LATTE',
        price: 125
    },
    {
        id: 12,
        name: 'BREWED COFFEE',
        price: 40
    },
    {
        id: 12,
        name: 'CAFE AMERICANO',
        price: 50
    },
    {
        id: 12,
        name: 'CAPPUCCINO	',
        price: 75
    },
    {
        id: 12,
        name: 'LATTE',
        price: 80
    },
    {
        id: 12,
        name: 'CAFE MOCHA',
        price: 80

    },
    {
        id: 12,
        name: 'KOPI VIENNA',
        price: 95
    },
    {
        id: 12,
        name: 'CARAMEL	',
        price: 80
    },
    {
        id: 12,
        name: 'HAZELNUT',
        price: 80
    },
    {
        id: 12,
        name: 'Double Cheesy Ensaymada',
        price: 75
    },
    {
        id: 12,
        name: 'Assorted Oatmeal	',
        price: 115
    },
    {
        id: 12,
        name: 'Brownies',
        price: 40
    },
    {
        id: 12,
        name: 'Chunky Cookies	',
        price: 85
    },
    {
        id: 12,
        name: 'Chocolate Mousse	',
        price: 125
    },
    {
        id: 12,
        name: 'Tres Leches',
        price: 129
    },
    {
        id: 12,
        name: 'Not So Messy Cookies	',
        price: 155
    },
    {
        id: 12,
        name: 'Korean Garlic Bun',
        price: 65
    },
    {
        id: 12,
        name: 'Revel Bar',
        price: 32
    },
    {
        id: 12,
        name: 'Ferero Cupcake',
        price: 75

    },
    {
        id: 12,
        name: 'Oreo Cupcake',
        price: 65
    },
    {
        id: 12,
        name: 'Oatmeal Cookie',
        price: 25
    },
    {
        id: 12,
        name: 'Ham and Cheese',
        price: 39
    },
    {
        id: 12,
        name: 'Chocolate Muffin	',
        price: 65
    }
    // {
    //     id: 12,
    //     name: 'BAKED PENNE',
    //     price: 120000
    // },
    // {
    //     id: 12,
    //     name: 'PASTA CARBONARA',
    //     price: 120000
    // },
    // {
    //     id: 12,
    //     name: 'LASAGNA	',
    //     price: 120000
    // }

    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
             
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
                
        }
        
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    
}