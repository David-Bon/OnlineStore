import { updateOrder } from "../utils/cartItemsUpdate";

export const ON_TOTAL_PRICE = 'ON_TOTAL_PRICE';
export const COUNT_BUY_PLUS = 'COUNT_BUY_PLUS';
export const COUNT_BUY_MINUS = 'COUNT_BUY_MINUS';
export const SET_INPUT_VALUES = 'SET_INPUT_VALUES';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const ON_FETCH_PRODUCTS = 'ON_FETCH_PRODUCTS';
export const PRODUCTS_REQUESTED = 'PRODUCTS_REQUESTED';

export const CountBuyPlus = (id) => (dispatch, getStore) => {
    const state = getStore().productList
    const plus = updateOrder(state, id, 1)
    dispatch(IncrementProduct(plus))
};

const IncrementProduct = (updatedState) => ({
    type: COUNT_BUY_PLUS,
    payload: updatedState
});


export const CountBuyMinus = (id) => (dispatch, getStore) => {
    const state = getStore().productList
    const minus = updateOrder(state, id, -1);
    dispatch(DecrementProduct(minus));
};

const DecrementProduct = (updatedState) => ({
    type: COUNT_BUY_MINUS,
    payload: updatedState
});

export const OnTotalPrice = () => (dispatch, getStore) => {
    const state = getStore().productList
    const addedItems = state.cartItems.reduce((acc, item) => (acc + item.count), 0);
    const addedTotalPrice = state.cartItems.reduce((acc, item) => (acc + item.totalPrice), 0);
    dispatch(TotalPrice(addedItems, addedTotalPrice))
};

const TotalPrice = (addedItems, addedTotalPrice) => ({
    type: ON_TOTAL_PRICE,
    addedItems,
    addedTotalPrice
});

export const SetCartItems = (id) => (dispatch, getStore) => {
    const state = getStore().productList
    const setItems = updateOrder(state, id, 1)
    dispatch(DispatchCartItems(setItems))
};

const DispatchCartItems = (updatedState) => {
    return {
        type: SET_CART_ITEMS,
        payload: updatedState,

    }
};

export const SetInputValues = (name, surname, address, phone, cartItems) => ({
    type: SET_INPUT_VALUES,
    payload: {name, surname, address, phone, cartItems}
});

export const OnFetchProducts = (products) => ({
    type: ON_FETCH_PRODUCTS,
    payload: products
});

export const ProductsRequested = (value) => ({
    type: PRODUCTS_REQUESTED,
    payload: value,
});
