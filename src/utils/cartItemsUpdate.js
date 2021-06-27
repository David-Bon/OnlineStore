export const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

export const updateCartItem = (product, item = {}, quantity) => {
    const {
        id = product.id,
        price = product.price,
        count = 0,
        name = product.name
    } = item;

    return {
        id,
        name,
        count: count + quantity,
        totalPrice: price * (count + quantity)
    };
};

export const updateOrder = (state, productId, quantity) => {
    const {products, cartItems} = state;
    const product = products.find((item) => item.id === productId);
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    const item = cartItems[productIndex];

    const newItem = updateCartItem(product, item, quantity);
    return updateCartItems(cartItems, newItem, productIndex)
};

