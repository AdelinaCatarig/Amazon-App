export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2}
];

export function addToCart(productId) {
    
    let matchingItem;
    matchingItem = cart.find(itemCart => itemCart.productId === productId);

    if(matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
        productId,
        quantity: 1,});
    }

    console.log(cart);
}