const body = document.querySelector("body")
let cart_icon = document.querySelector('.ri-shopping-bag-4-line ');
let cart = document.querySelector('.cart');
let close_cart = document.querySelector('#close-cart');



cart_icon.onclick =()=> {
    body.classList.add('active');
};

close_cart.onclick =()=> {
    body.classList.remove('active');
};

if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('ri-delete-bin-7-line');
    for (var i=0; i< removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click",removeCartItem);
    }
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

function quantityChaneged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1;
    }
    updatetotal();
}

function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var pricElement = cartBox.getAttributeNames("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(pricElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    document.getElementsByClassName("total-price")[0].innerText = '$' + total;
}

var addCart = document.getElementById("buynow");
for (var i = 0; i < cartBoxes.length; i++) {
    var button = addCart[i];
    button.addEventListener("click",addCartClicked);
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title").innerText;
    var price = shopProducts.getElementsByClassName("price").innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartIteamNames = cartContent.getAttributeNames("cart-product-title");
    for (var i = 0; i < cartBoxes.length; i++) {
        if (cartIteamNames[i].innerText == title) {
            alert("you have already added this item to cart")
            return;
        }
    }
    var cartContent = `                    
    <img src="${productImg}" alt="" class="cart-img" />
              <div class="ditails-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" name="" id="" value="1"  class="cart-quantity">
              </div>
             <!--remove item-->
             <i class="ri-delete-bin-7-line" ></i>`;
             cartShopBox.innerHTML= cartBoxContent;
             cartItems.append(cartShopBox);
             cartShopBox.getElementsByClassName("ri-delete-bin-7-line")[0]
             .addEventListener('click' ,removeCartItem);
             cartShopBox.getElementsByClassName('cart-quantity')[0]
             .addEventListener('change', quantityChaneged);


}

























