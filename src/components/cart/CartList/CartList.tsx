import React from 'react';
import CartItem from '../CartItem/CartItem';

import css from './CartList.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../../state/store';


const CartList = () => {
    const { cart } = useSelector<AppState>(state => state.shoppingCart);
    const { cartItemsCount } = useSelector<AppState>(state => state.shoppingCart);

    return (
        <div className={css.cartList}>
            <div className={css.header}>
                <h1>Cart</h1>
                <div>
                    <span className={css.productCount}>{cart.length} Products</span>
                    <span className={css.itemCount}>({cartItemsCount} items in total)</span>
                </div>
            </div>
            <div className={css.body}>
                {cart.map(item => (
                    <CartItem key={item.gtin} data={item} />
                ))}
            </div>
        </div>
    )
}

export default CartList;