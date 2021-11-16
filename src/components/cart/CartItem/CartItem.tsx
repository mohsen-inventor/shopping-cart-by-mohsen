import React from 'react';
import { CartItem } from '../../../state/ShoppingCart/cartType';
import css from './CartItem.module.scss';
import { getCurrencySymbol } from '../../../utils/currency';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../state/ShoppingCart/cartAction';

import TextField from '@mui/material/TextField';

interface Props {
    data: CartItem
}

const CartItem = ({ data }: Props) => {
    const dispatch = useDispatch();
    const currencySymbol = getCurrencySymbol(data.recommendedRetailPriceCurrency);

    return (
        <div className={css.cartItem}>
            <div className={css.photo}><img src={data.imageUrl} /></div>
            <div className={css.details}>
                <h2 className={css.title}>{data.name}</h2>
                <p className={css.price}>
                    <span className={css.itemPrice}>{currencySymbol} {data.recommendedRetailPrice}</span>
                    <span className={css.shippingPrice}>{currencySymbol} 27</span>
                </p>
                <div className={css.shippingNote}>
                    <span className={css.gtin}>{data.gtin}</span>
                    <span className={css.note}>Usually ships within 2 days.</span>
                </div>
                <div className={css.action}>
                    <div className={css.remove}>
                        <button onClick={() => dispatch(removeFromCart(data.gtin))}>Remove</button>
                    </div>
                    <div className={css.quantity}>Selected quantity ({data.quantity})</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;