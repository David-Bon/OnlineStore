import React from 'react';
import { CartReduxForm } from './cart-redux-form/cart-form';
import styles from './cart.module.scss'
import { connect } from 'react-redux';
import { CountBuyMinus, CountBuyPlus, OnTotalPrice, SetInputValues } from '../../redux/actions';

const Cart = ({ SetInputValues, cartItems, CountBuyPlus, CountBuyMinus, OnTotalPrice, finalPrice }) => {

    const handleTotal = (value, id) => {
        value(id)
        OnTotalPrice()
    }

    const onSubmit = (formData) => {
        SetInputValues(formData.name, formData.surname, formData.address, formData.phone, cartItems)
        formData.name = '';
        formData.surname = '';
        formData.address = '';
        formData.phone = '';
    };

    return (
        <div className={styles.root}>
            <div className={styles.cartWrap}>
                {
                    cartItems.map((el) => {
                        const {id, name, totalPrice, count} = el
                        return (
                            <div className={styles.cartEl} key={id}>
                                <p className={styles.cartName}>{name}</p>
                                <div className={styles.btnWrap}>
                                    <button className={styles.btn} onClick={() => {
                                        handleTotal(CountBuyMinus, id)
                                    }}>
                                        <span>-</span>
                                    </button>
                                    <p className={styles.count}>{count}</p>
                                    <button className={styles.btn} onClick={() => {
                                        handleTotal(CountBuyPlus, id)
                                    }}>
                                        <span>+</span>
                                    </button>
                                </div>
                                <p className={styles.totalCountPerItem}>Total: {totalPrice}$</p>
                            </div>
                        )
                    })
                }
                <p className={styles.totalPrice}>TOTAL: {finalPrice}$</p>
            </div>
            <CartReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.productList.cartItems,
    finalPrice: state.productList.totalPrice
})

const mapDispatchToProps = {
    SetInputValues, CountBuyMinus, CountBuyPlus, OnTotalPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
