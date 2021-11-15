import React from 'react';

import css from './CartList.module.scss';

interface Props {

}

const CartList = (props: Props) => {
    return (
        <div className={css.cartList}>
            <div className={css.header}>
                List header
            </div>
            <div className={css.body}>
                Items list
            </div>
        </div>
    )
}

export default CartList;