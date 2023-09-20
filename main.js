let carts = document.querySelectorAll(".add-to-cart");
//let removeItem = document.querySelectorAll(".remove-item");
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



// check for items in local sotrage 
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



//display cart items
  function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem("totalCost");

    if(cartItems && productContainer ) {
        productContainer.innerHTML = " ";
        Object.values(cartItems).map((item) => {

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
         <!---<label for="submit></label>-->
        <div class="quantity-input">
        <button class="quantity-minus" type="button" onclick="decrement()" class="increment">-</button>
        <h5 id="counting">${item.inCart}</h5>
        <button class="quantity-plus" type="button" onclick="increment()">+</button>
      </div>
              </div>
              </form>
         
          <div class="item-content">
          <input type="button" class="btn remove-item" value="remove item" onclick="removeItem(${item.id})"></input>
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
  


//we want to increase cartItems too. so i commented this out to try another method.
//let cartNumber = localStorage.getItem("cartNumber");

//cartNumber = []

//function increment(e){
  //var quant = localStorage.setItem("counting", increment);
  //for (var i = 0; i < cartNumber.length; i++);
//  var input =
  //cartNumber[i];
  //localStorage.setItem('cartNumber', cartNumber)
//}

//increment();

// creation of decrement function
//function decrement() {
  //if (data > 0) {
    //data = data - 1;
    //document.getElementById("counting").innerText = data;
  //}
//}





