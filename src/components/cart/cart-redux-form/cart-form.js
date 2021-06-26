import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './cart-form.module.scss'

const CartForm = ({ handleSubmit }) => {

    return (
        <div>
        <form className={styles.formWrap} onSubmit={handleSubmit}>
            <Field placeholder="Name" name="name" component="input" type="text"/>
            <Field placeholder="Surname" name="surname" component="input" type="text"/>
            <Field placeholder="Address" name="address" component="input" type="text"/>
            <Field placeholder="Phone number" name="phone" component="input" type="text"/>
            <button className={styles.btn} type="submit"
                    onClick={() => alert("your order has been sent to state in the 'inputInfo' section")}>
               <span className={styles.btnText}>
                   Order
               </span>
            </button>
        </form>
        </div>
    )
}

export const CartReduxForm = reduxForm({
    form: 'cartInfo'
})(CartForm)
