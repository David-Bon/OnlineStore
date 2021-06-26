import React from 'react';
import Header from './components/header/header';
import { Route } from 'react-router';
import Cart from './components/cart/cart';
import ProductList from './components/product-list/product-list';
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.root}>
            <Header/>
            <Route path="/products" render={() => <ProductList/>}/>
            <Route path="/cart" render={() => <Cart/>}/>
        </div>
    );
}

export default App;
