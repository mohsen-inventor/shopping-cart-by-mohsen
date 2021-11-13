import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

// CSS
import css from './ProductsGrid.module.scss';

interface Props {

}

const ProductsGrid = (props: Props) => {
    return (
        <div className={css.productsGrid}>
            <ProductCard />
        </div>
    )
}

export default ProductsGrid;