import React from 'react'
import Button from '../../_ui/Button/Button';
import css from './CartSummary.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../../state/store';
import { getCurrencySymbol } from '../../../utils/currency';


const CartSummary = () => {
    const { cart } = useSelector<AppState>(state => state.shoppingCart);

    const currencySymbol = getCurrencySymbol(cart[0]?.recommendedRetailPriceCurrency);

    const totalPrice = cart.reduce((total, cartItem) => {
        return total + (cartItem.recommendedRetailPrice * cartItem.quantity);
    }, 0).toFixed(2);

    return (
        <div className={css.cartSummary}>
            <div className={css.header}>
                Cart Summary
            </div>
            <div className={css.body}>
                <div className={css.priceBreakdown}>
                    <div className={css.price}>
                        <span className={css.label}>Subtotal</span>
                        <span className={css.value}>{currencySymbol} {totalPrice}</span>
                    </div>
                    <div className={css.price}>
                        <span className={css.label}>Est. Total</span>
                        <span className={css.value}>{currencySymbol} {totalPrice}</span>
                    </div>
                </div>
                <div className={css.action}>
                    <Button>proceed to checkout</Button>
                </div>
            </div>

        </div>
    )
}

export default CartSummary;