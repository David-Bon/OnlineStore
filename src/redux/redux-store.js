import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ProductReducer } from './product-list-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    productList: ProductReducer,
    form: formReducer
})
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let store = createStore(reducers, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

window.store = store;

export default store
