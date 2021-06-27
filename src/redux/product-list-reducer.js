import {
    COUNT_BUY_MINUS,
    COUNT_BUY_PLUS,
    ON_FETCH_PRODUCTS,
    ON_TOTAL_PRICE,
    PRODUCTS_REQUESTED, SET_CART_ITEMS,
    SET_INPUT_VALUES
} from './actions';

let
    InitialState = {
        products: [],
        cartItems: [],
        inputInfo: [],
        totalPrice: null,
        totalCount: null,
        loading: true
    }

export const ProductReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ON_FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case PRODUCTS_REQUESTED:
            return {...state, loading: action.payload}
        case ON_TOTAL_PRICE:
            return {...state, totalCount: action.addedItems, totalPrice: action.addedTotalPrice}
        case COUNT_BUY_PLUS:
            return {...state, cartItems: action.payload}
        case COUNT_BUY_MINUS:
            return {...state, cartItems: action.payload}
        case SET_INPUT_VALUES:
            return {...state, inputInfo: action.payload}
        case SET_CART_ITEMS:
            return {...state, cartItems: action.payload}
        default:
            return state
    }
}
