import React from 'react';
import CartList from '../CartList/CartList';
import CartSummary from '../CartSummary/CartSummary';
import css from './Cart.module.scss';

interface Props {

}

const Cart = (props: Props) => {
    return (
        <div className={css.cart}>
            <div className={css.items}>
                <CartList />
            </div>
            <div className={css.summary}>
                <CartSummary />
            </div>
        </div>
    )
}

export default Cart;