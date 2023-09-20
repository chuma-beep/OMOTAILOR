let prod = document.getElementById('prod-item');

let basket = JSON.parse(localStorage.getItem("data")) || [];




let generate = () => {
 return  (prod.innerHTML= storeData
    .map((x) => {
    let {id, name, price, img} = x;
    let search = basket.find((x) => x.id === id ) || [];
    return  `
    <div class="item1" id=product-id-${id}>
   <div>
     <img id="myImg" src=${img} alt="Agbada" />
   </div>
   <div class="form-item" id="item-content">
     <div class="item-txt">
       <h2>${name}</h2>
     </div>
     <form>
       <div class="input">
         <input class="price" type="text" id="price" name="price" value="&#8358;${price},000" readonly>
       </div>
       <div class="quant">
          <button class="quantity-minus" type="button" onclick="decrement(${id})">-</button>
          <h5 id=${id} class="quantity">${search.item === undefined ? 0: search.item}</h5>
          <button class="quantity-plus" type="button" onclick="increment(${id})">+</button>
     </div>
     </form>
         </div>
         </div>
       
 `;
 })
 .join(""));
};

generate();

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
//console.log(basket);
update(selectedItem.id);
localStorage.setItem("data", JSON.stringify(basket));
};

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
localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) =>{
    let search = basket.find((x) => x.id === id);
document.getElementById(id).innerHTML = search.item;
calculation();
};

let calculation =() => {
    let cartIcon = document.getElementById("count");
     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
}
calculation();