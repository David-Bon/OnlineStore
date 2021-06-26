import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss'
import { connect } from 'react-redux';

const Header = ({ total, totalCount }) => {
    return (
        <div className={styles.root}>
            <NavLink className={styles.navLink} to="/products">Store</NavLink>
            <div className={styles.cartInfo}>
                <p className={styles.orderInfo}>
                    Items in cart: {totalCount} ($ {!total ? '0' : total})
                </p>
            </div>
            <div className={styles.bag}>
            <NavLink to="/cart">
                {
                    <img className={styles.img} src="https://image.flaticon.com/icons/png/512/82/82632.png"
                         alt=""/>
                }
            </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    total: state.productList.totalPrice,
    totalCount: state.productList.totalCount
})

export default connect(mapStateToProps)(Header)
