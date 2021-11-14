import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/store';
import { getProductsStart } from '../../../state/ShoppingCart/cartAction';
// CSS
import css from './ProductsGrid.module.scss';

interface Props {

}

const ProductsGrid = (props: Props) => {
    const { products } = useSelector<AppState>(state => state.shoppingCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsStart());
    }, [])

    return (
        <div className={css.productsGrid}>
            {products.map(product => (
                <ProductCard data={product} />
            ))}
        </div>
    )
}

export default ProductsGrid;