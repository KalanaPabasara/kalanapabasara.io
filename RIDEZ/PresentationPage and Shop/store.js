if(document.readyState=="loading"){     //checking to make sure that this document is loaded
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready()
}
function ready(){ //this function is used to give the functionality to remove buttons in the cart
    var removeCartitemButton=document.getElementsByClassName('btn-danger')
    console.log(removeCartitemButton)
    for(var i=0;i<removeCartitemButton.length;i++){
    var button=removeCartitemButton[i]
    button.addEventListener('click',removeCartItem)
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for(var i=0;i<quantityInputs.length;i++){
    var input = quantityInputs[i]
    input.addEventListener('change',quantityChanged) //passing the changed quantity to update the quantity of items
}

var addToCartButtons = document.getElementsByClassName('shop-item-button')
for(var i=0;i<addToCartButtons.length;i++){
    var button=addToCartButtons[i]
    button.addEventListener('click',addToCartClicked) // passing the item which was added to the cart
    
}

}




function removeCartItem(event){ //removing cart items
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()

}

function quantityChanged(event) { //updating the quantity & cart
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event){ //updating the cart when a product is added to the cart from the store
    var button=event.target
    var shopItem=button.parentElement.parentElement
    var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText //getting the title of the product from the store
    var price= shopItem.getElementsByClassName('shop-item-price')[0].innerText //getting the price of the product from the store
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src //getting the image of the product from the store
    addItemToCart(title,price,imageSrc)
    updateCartTotal()
}

function addItemToCart(title,price,imageSrc){ //adding items to cart with the title,price and image
    var cartRow=document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems= document.getElementsByClassName('cart-items')[0]
    var cartItemNames= cartItems.getElementsByClassName('cart-item-title')
    for(var i=0;i<cartItemNames.length;i++){
        if (cartItemNames[i].innerText==title){
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    //hooking up again all the event listeners because they were not around when setting up initial events
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
    
}

function updateCartTotal(){ //this function is to update the total of the cart
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total=0
    for(var i=0;i<cartRows.length;i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0]
        
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total=total+(price* quantity)
       
    }
    total = Math.round(total*100)/100 //rounding up to 2 decimal points
   document.getElementsByClassName('cart-total-price')[0].innerText='$'+total
}



