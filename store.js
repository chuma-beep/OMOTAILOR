//SELECT ELEMENTS
var productsEl = document.querySelector(".products");
var productsEl = document.querySelector(".products");

//RENDER PRODUCTS
function renderProducts() {
  products.forEach( (product) =>{
    productsEl.innerHTML +=
      `<div class="item1">
      <div><img id="myImg" src="${product.imgSrc}" alt="${product.name}"/>
      </div>
      <div class="form-item" id="item-content">
          <div class="item-txt">
                 <h2>${product.name}</h2>
            </div>
        <form>
           <div class="input">    
            <input class="price" type="text" id="price" name="price" value="&#8358;${product.price}" readonly>
            </div>
        
     </form>
      <div class="item-content" id="item-btn" onclick="addToCart(${product.id})">
      <input type="button" class="btn" id="btn" value="Add to cart"></input>
               </div>
         </div>
  </div>
    `;
  });
}
renderProducts();


// cart array
var cart = [];

//Add to cart
function addToCart(id) {
  //check if product already exists in cart
  if(cart.some((item) => item.id === id)){
    alert("Product already in cart")
  }else{
    const item = products.find((product) => product.id === id);

/* for the counter*/

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

var data = 0;


// update cart
function updateCart(){
renderCartItems();
//renderSubtotal();
}


//render cart items
function renderCartItems(){
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

