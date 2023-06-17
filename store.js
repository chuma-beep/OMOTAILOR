//SELECT ELEMENTS
const productsEl = document.querySelector(".products");

//RENDER PRODUCTS
function renderProducts() {
  products.forEach( (product) => {
    productsEl.innerHTML +=
      `
   <div class="item1"><img id="myImg" src="images/pachoeko-post-2023_03_14_21_57.jpg" alt="Agbada" />
    <div class="item-content">
    <p>Agbada</p>
    <input type="button" class="btn" value="add to cart"></input>
    </div>
    <div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
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