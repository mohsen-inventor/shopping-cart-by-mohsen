import React from 'react'
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
                Summary body
            </div>
        </div>
    )
}


export default CartSummary;