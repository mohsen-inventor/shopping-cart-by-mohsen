import React from 'react';
import Link from 'next/link';
import { Product } from '../../../types';

import css from './ProductCard.module.scss';
import Button from './../../_ui/Button/Button';

import { getCurrencySymbol } from './../../../utils/currency';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../state/ShoppingCart/cartAction';

interface Props {
    data: Product;
}

const ProductCard = ({ data }: Props) => {
    const dispatch = useDispatch();

    let currencySymbol = getCurrencySymbol(data.recommendedRetailPriceCurrency);

    return (
        <div className={css.productCard}>
            <div className={css.card}>
                <Link href="/product">
                    <a className={css.photo}>
                        <div className={css.inner}>
                            <img src={data.imageUrl} alt={data.name} />
                        </div>
                    </a>
                </Link>
                <h2 className={css.title}>
                    <Link href="/product">
                        <a>{data.name}</a>
                    </Link>
                </h2>
                <div className={css.cardFooter}>
                    <div className={css.price}>
                        <span className={css.label}>Price</span>
                        <span className={css.value}> {currencySymbol} {data.recommendedRetailPrice}
                        </span>
                    </div>
                    <div className={css.action}>
                        <Button btnClick={() => dispatch(addToCart(data))}>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;