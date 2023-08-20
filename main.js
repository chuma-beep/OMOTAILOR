let carts = document.querySelectorAll(".add-to-cart");

//products
let products = [

    {
        id: 0,
        name: 'AGABADA',
        tag:'agbada',
        price: 150,
        incart: 0
    },
    
    {   id: 1,
        name: 'SUIT',
        tag:'suit',
        price: 120,
        incart: 0
    },

    {
        id: 2,
        name: 'KAFTAN',
        tag:'kaftan',
        price: 50,
        incart: 0
    },

    {
        id: 3,
        name: 'Agabada',
        tag:'simpleAgbada',
        price: 100,
        incart: 0
    },

    {   
        id: 4,
        name: 'TWOPIECESUIT',
        tag:'twopiecesuit',
        price: 70,
        incart: 0
    },

 
];


//loop throught cart
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
     cartNumbers(products[i]);
     totalCost(products[i])
    })
}
// check foritems in local sotrage 
function onloadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}


// set cart number
function cartNumbers(product){
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
     setItems(product);
}

// setup the number of items 
function setItems(product){
let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);

if(cartItems != null){
     if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }

    cartItems[product.tag].incart += 1;
}else {
   product.inCart = 1;
   cartItems = {
     [product.tag]: product
  }
}
localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//calculate total cost
function totalCost(product) {
let cartCost = localStorage.getItem("totalCost");
  

  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + 
    product.price);
  }else {
        localStorage.setItem("totalCost", product.price);
    }
  }


  //remove items
function removeItem(product){
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){
        localStorage.setItem("productsIncart", "[]");
    }
}
//display cart items
  function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    console.log(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem("totalCost");

    if(cartItems && productContainer ) {
        productContainer.innerHTML = " ";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=             
            `
            <div class="cart-item">
            <div><img id="myImg" src="./images/${item.tag}.jpg" alt="${item.name}" />
            </div>
            <div class="form-item" id="item-content">
                <div class="item-txt">
                       <h2>${item.name}</h2>
                  </div>
              <form>
                 <div class="input">    
                            <input class="price" type="text" id="price" name="price" value="&#8358;${item.price},000" readonly>
                  </div>
                <div class="quantity">
           <label for="quantity"></label>
          <div class="quantity-input">
          <button class="quantity-minus" type="button"onclick="decrement()">-</button>
          <h5 id="counting">${item.incart}</h5>
          <button class="quantity-plus" type="button" onclick="increment()">+</button>
        </div>
                </div>
                </form>
           
            <div class="item-content">
            <input type="button" class="btn remove-item" value="remove item"></input>
                     </div>
               </div>
          
        </div>
        `;   
        });

        item.innerHTML += `
        <form class="form">
         <h2>Total amount</h2>
         <div class="input-total">
       <input type="text" id="total" name="total" value="&#8358;${cartCost},000" readonly>
          </div>
    <div class="item-content-btn" id="checkout-btn">
    <a href="checkout.html"><input type="button"   class="btn" value="CHECKOUT"></input></a>
    </div>
    </form>
  `;
    }
  }

onloadCartNumbers();
displayCart();


/* for the counter*/

//initialising a variable name data

var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;


//creation of increment function
function increment() {
	data = data + 1;
	document.getElementById("counting").innerText = data;
}

// creation of decrement function
function decrement() {
  if (data > 0) {
    data = data - 1;
    document.getElementById("counting").innerText = data;
  }
}















/*
  // Step 1: Retrieve the element containing the array
  const arrayContainer = document.getElementById('myArray');

  // Step 2: Retrieve all the items in the array
  const arrayItems = arrayContainer.children;

  // Step 3: Add event listeners to each item
  for (let i = 0; i < arrayItems.length; i++) {
    arrayItems[i].addEventListener('click', function() {
      // Step 4: Handle the click event for each item
      console.log('Clicked item:', this.innerText);
      // You can perform any specific action here for the targeted item
      // For example, you can change the color of the clicked item:
      this.style.color = 'red';
    });
  }
  */