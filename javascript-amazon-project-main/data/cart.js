export let cart = JSON.parse(localStorage.getItem('cart'));
console.log('1 ' + cart);

if(!cart) {
    cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
        deliveryOptionId: '1',
    }, 
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
        deliveryOptionId: '2',
    }
];
}
//console.log('2 ' + JSON.stringify(cart));

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {   
    let matchingItem;
    matchingItem = cart.find(itemCart => itemCart.productId === productId);
    console.log(quantity);

    if(matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
        productId,
        quantity,
        deliveryOptionId: '1',
    });
    }
    saveToStorage();
}

export function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;  
}

export function removeFromCart(productId) {
    cart = cart.filter(itemCart => itemCart.productId !== productId);
    saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
    const productFoundIndex = cart.findIndex( c => c.productId === productId);
    console.log(productFoundIndex);
    if (productFoundIndex >= 0) { 
        cart[productFoundIndex].quantity = newQuantity;
        console.log(cart);
        saveToStorage();
    }
}