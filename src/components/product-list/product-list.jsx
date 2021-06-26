import React, { useEffect } from 'react';
import styles from './product-list.module.scss';
import {connect} from 'react-redux';
import {OnTotalPrice, SetCartItems} from '../../redux/actions';
import {ProductsThunkCreator} from '../../service/product-service';
import Spinner from '../spinner/spinner';

const ProductList = ({ products, loading, ProductsThunkCreator, SetCartItems, OnTotalPrice }) => {

    useEffect(() => {
        ProductsThunkCreator();
    },[]);

    const handleAddToCart = (id) => {
        SetCartItems(id)
        OnTotalPrice(id)
    };

    return loading ? <Spinner/> :
        (
            <div className={styles.root}>
                {
                    products.map((item) => {
                        const {id, description, image, name, price} = item
                        return <div className={styles.productsList} key={id}>
                            <img className={styles.productImage} src={image} alt="Image not Found"/>
                            <div className={styles.descriptionWrapper}>
                                <p className={styles.itemName}>{name}</p>
                                <p className={styles.itemDescription}>{description}</p>
                                <p className={styles.itemPrice}>{price}$</p>
                                <div className={styles.btn} onClick={() => handleAddToCart(id)}><p
                                    className={styles.btnText}>Add to cart</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
};

const mapStateToProps = (state) => ({
    products: state.productList.products,
    loading: state.productList.loading
});

const mapDispatchToProps = {
    SetCartItems,
    ProductsThunkCreator,
    OnTotalPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
