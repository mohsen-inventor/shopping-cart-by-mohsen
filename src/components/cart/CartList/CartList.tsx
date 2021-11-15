import React from 'react';
import CartItem from '../CartItem/CartItem';

import css from './CartList.module.scss';

interface Props {

}

const CartList = (props: Props) => {
    return (
        <div className={css.cartList}>
            <div className={css.header}>
                <h1>Cart</h1>
                <div>
                    <span className={css.productCount}>4 products</span>
                    <span className={css.itemCount}>(7 items)</span>
                </div>
            </div>
            <div className={css.body}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    )
}

export default CartList;