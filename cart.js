
// cart array
var cart = [];

//Add to cart
function addToCart(id) {
  //check if product already exists in cart
  if(cart.some((item) => item.id === id)){
    alert("Product already in cart")
  }else{
    const item = products.find((product) => product.id === id);


    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }


// update cart
function updateCart(){
renderartItems();
//renderSubtotal();
}

updateCart();
}


//render cart items
functionrenderCartItems();{
  cart.forEach((item) => {
    cartItemsEl.innerHTML +=`
    <div class="cart-item">
    <div><img id="myImg" src="${item.imgSrc}" alt="${item.name}" />
    </div>
    <div class="form-item" id="item-content">
        <div class="item-txt">
               <h2>${item.name}</h2>
          </div>
      <form>
         <div class="input">    
					<input class="price" type="text" id="price" name="price" value="&#8358;${item.price}" readonly>
          </div>
        <div class="quantity">
   <label for="quantity"></label>
  <div class="quantity-input">
    <button class="quantity-minus" type="button"onclick="decrement()">-</button>
    <h5 id="counting">${item.numberOfUnits}</h5>
    <button class="quantity-plus" type="button" onclick="increment()">+</button>
  </div>
        </div>
        </form>
   
    <div class="item-content">
    <input type="button" class="btn" value="remove item"></input>
             </div>
       </div>
  
</div>
`

  })
}




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
//creation of decrement function
function decrement() {
	data = data - 1;
	document.getElementById("counting").innerText = data;
}
