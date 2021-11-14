import React from 'react';
import { Product } from '../../../types';

// CSS
import css from './ProductCard.module.scss';
import Button from './../../_ui/Button/Button';

// Utils
import { getCurrencySymbol } from './../../../utils/currency';
interface Props {
    data: Product;
}

const ProductCard = ({ data }: Props) => {
    let currencySymbol = getCurrencySymbol(data.recommendedRetailPriceCurrency);

    return (
        <div className={css.productCard}>
            <div className={css.card}>
                <div className={css.photo}>
                    <div className={css.inner}>
                        <img src={data.imageUrl} alt={data.name} />
                    </div>
                </div>
                <h2 className={css.title}>{data.name}</h2>
                <div className={css.cardFooter}>
                    <div className={css.price}>
                        <span className={css.label}>Price</span>
                        <span className={css.value}> {currencySymbol} {data.recommendedRetailPrice}
                        </span>
                    </div>
                    <div className={css.action}>
                        <Button>Add to Cart</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard;