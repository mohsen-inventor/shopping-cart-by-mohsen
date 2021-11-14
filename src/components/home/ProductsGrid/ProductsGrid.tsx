import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/store';
import { getProductsStart } from '../../../state/ShoppingCart/cartAction';


import css from './ProductsGrid.module.scss';
import { Product } from '../../../types';

interface Props {

}

const ProductsGrid = (props: Props) => {
    const products = useSelector<AppState>(state => state.shoppingCart.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsStart());
    }, [])


    return (
        <div className={css.productsGrid}>
            <ProductCard />

            {products.map(item => {
                console.log(item)
            })}
        </div>
    )
}

export default ProductsGrid;