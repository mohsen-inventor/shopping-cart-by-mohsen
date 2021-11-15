import React from 'react'
import Button from '../../_ui/Button/Button';
import css from './CartSummary.module.scss';


interface Props {

}

const CartSummary = (props: Props) => {
    return (
        <div className={css.cartSummary}>
            <div className={css.header}>
                Cart Summary
            </div>
            <div className={css.body}>
                <div className={css.priceBreakdown}>
                    <div className={css.price}>
                        <span className={css.label}>Subtotal</span>
                        <span className={css.value}>271</span>
                    </div>
                    <div className={css.price}>
                        <span className={css.label}>Est. Total</span>
                        <span className={css.value}>271</span>
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