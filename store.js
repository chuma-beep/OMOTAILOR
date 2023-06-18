//SELECT ELEMENTS
<<<<<<< HEAD
const productsEl = document.querySelector(".products");
=======
var productsEl = document.querySelector(".products");
>>>>>>> 127d6f1 (corrected some errors in the store)

//RENDER PRODUCTS
function renderProducts() {
  products.forEach( (product) => {
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
      <div class="item-content" id="item-btn">
      <input type="button" class="btn" id="btn" value="Add to cart"></input>
               </div>
         </div>
      
  </div>
    `
  });
}
renderProducts();


/* for the counter

//initialising a variable name data

//var data = 0;

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
*/