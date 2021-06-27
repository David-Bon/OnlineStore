import React, { useEffect } from 'react';
import Header from '../header/header';
import { Route, useHistory } from 'react-router';
import Cart from '../cart/cart';
import ProductList from '../product-list/product-list';
import styles from './App.module.scss'

const App = () => {
    let history = useHistory();

    useEffect(() => {
        history.push('/products')
    }, [])

    return (
        <div className={styles.root}>
            <Header/>
            <Route path="/products" render={() => <ProductList/>}/>
            <Route path="/cart" render={() => <Cart/>}/>
        </div>
    );
}

export default App;
