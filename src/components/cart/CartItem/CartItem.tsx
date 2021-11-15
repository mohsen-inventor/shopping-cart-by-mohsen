import React from 'react';
import css from './CartItem.module.scss';

interface Props {

}

const CartItem = (props: Props) => {
    return (
        <div className={css.cartItem}>
            <div className={css.photo}>Photo</div>
            <div className={css.details}>
                <h2 className={css.title}>Title</h2>
                <p className={css.price}>
                    <span className={css.itemPrice}>106</span>
                    <span className={css.shippingPrice}>27</span>
                </p>
                <div className={css.shippingNote}>
                    <span>8411061865613</span>
                    <span>Usually ships within 2 days.</span>
                </div>
                <div className={css.action}>
                    <div className={css.remove}>
                        <a>Remove</a>
                    </div>
                    <div className={css.quantity}>
                        Quantity
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;