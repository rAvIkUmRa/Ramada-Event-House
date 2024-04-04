let cart = []
const cartBtn = document.getElementById("cart-btn");
const item = document.getElementById('item1');

cartBtn.addEventListener('click', function() {
    cart.push(item.innerText)
    localStorage.setItem("cart",JSON.stringify(cart))
})