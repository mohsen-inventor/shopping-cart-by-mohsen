import React from 'react';

// CSS
import css from './ProductCard.module.scss';

interface Props {

}

const ProductCard = (props: Props) => {
    return (
        <div className={css.productCard}>
            <div className={css.card}>
                <div className={css.photo}>
                    <div className={css.inner}>
                        Photo
                    </div>
                </div>
                <h2 className={css.title}>Armaf Club De Nuit For Men Eau De Toilette Spray 105 Ml</h2>
                <div className={css.rating}>Rating</div>
                <div className={css.price}>Price</div>
                <div className={css.action}>Action button</div>
            </div>
        </div>
    )
}

export default ProductCard;