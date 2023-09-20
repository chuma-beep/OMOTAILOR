//query selectors
let totalAmount = document.getElementById("input-total"); 

let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];


//calculate items
let calculation =() => {
  let cartIcon = document.getElementById("count");
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0);
}

 calculation();
 ////generate items 
let generateCartItems = ()=>{
  if (basket.length !== 0){
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
      let { id, item } = x;
      let search = storeData.find((y) => y.id === id) || [];
      return`
      <div class="cart-item">
      <div><img id="myImg" src=${search.img} alt=""/>
      </div>
      <div class="form-item" id="item-content">
             <div class="item-txt">
                 <h2>${search.name}</h2>
              </div>       
           <form>
            <div class="input">    
                      <input class="price" type="text" id="price" name="price" value="&#8358;${search.price},000" readonly>
             </div>
            <div class="quantity">
              <div class="quantity-input">
               <button class="quantity-minus" type="button" onclick="decrement(${id})">-</button>
               <div id=${id} class="quantity">${item}</div>
               <button class="quantity-plus" type="button" onclick="increment(${id})">+</button>
               </div>
              </div>
              <h5>&#8358;${item * search.price},000</h5>
          </form>
        
           <div class="item-content">
           <input type="button" class="btn remove-item" value="remove item" onclick="removeItem(${id})"></input>
               </div>
         </div>
        </div>
  </div>
  `;
    })
 .join(""));
  }else{
  ShoppingCart.innerHTML = ` `;
  label.innerHTML= `
  <h2> Cart is empty </h2>
  <a href="index.html">
  </a>
  `;
 }
 };
 generateCartItems();
 
//increase items
 let increment = (id) =>{
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id)
if (search === undefined){
basket.push({
  id: selectedItem.id,
  item: 1,
});
}else{
  search.item += 1;
}
generateCartItems();
update(selectedItem.id);
localStorage.setItem("data", JSON.stringify(basket));
};

//decrease items
let decrement = (id) =>{
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

if(search === undefined) return;
else if (search.x === 0 )return;
else{
  search.item -= 1;
}
update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0);
generateCartItems();
localStorage.setItem("data", JSON.stringify(basket));
};

//update the changes as the user clicks
let update = (id) =>{
  let search = basket.find((x) => x.id === id);
document.getElementById(id).innerHTML = search.item;
calculation();
TotalAmount();
};


//remove item
let removeItem =(id)=>{
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id)
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
}

//calculate total amount
let TotalAmount = ()=>{
  if(basket.length !==0){
  let amount = basket.map((x) => {
    let {item,id} = x;
    let search = storeData.find((y) => y.id === id) || [];
    return item * search.price; 
  }).reduce((x,y) => x+y, 0);
   totalAmount.innerHTML = `
   <input type="text" id="total" name="total" value="&#8358;${amount},000"readonly></input>
   `
  }else  return;
};
TotalAmount();

