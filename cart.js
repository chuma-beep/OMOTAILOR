//SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const products = [
  {id:0,
  name: "Agbada",
  price: 500000,
  instock: 100,
  description: "lorem ipsum",
  imgSrc: "./images/omotailor-post-2023_03_19_00_51.jpg",
  },

]
//RENDER PRODUCTS
function renderProducts() {
  products.forEach( (product) =>{
    productsEl.innerHTML +=
      `
          <div class="item1">
    <div><img id="myImg" src="images/pachoeko-post-2023_03_14_21_57.jpg" alt="Agbada" />
    </div>
    <div class="form-item" id="item-content">
        <div class="item-txt">
               <h2>AGBADA</h2>
          </div>
      <form>
         <div class="input">    
					<input class="price" type="text" id="price" name="price" value="&#8358;100000" readonly>
          </div>
        <div class="quantity">
   <label for="quantity"></label>
  <div class="quantity-input">
    <button class="quantity-minus" type="button"onclick="decrement()">-</button>
    <h5 id="counting"></h5>
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
  });
}
renderProducts();



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