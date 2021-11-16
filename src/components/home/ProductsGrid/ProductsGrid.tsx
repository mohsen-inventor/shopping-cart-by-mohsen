import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/store';
import { getProductsStart } from '../../../state/ShoppingCart/cartAction';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// CSS
import css from './ProductsGrid.module.scss';

import { gsap, Power4 } from 'gsap/dist/gsap.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';

// Gsap register plugins
gsap.registerPlugin(ScrollToPlugin);

const ProductsGrid = () => {
    const { products } = useSelector<AppState>(state => state.shoppingCart);
    const { totalProductsCount } = useSelector<AppState>(state => state.shoppingCart);

    const totalPages = totalProductsCount / 20; // 20 is the number of products per page

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsStart());
    }, []);


    const changePage = (event, page: number) => {
        dispatch(getProductsStart(page));
        gsap.to(window, { duration: 0.8, scrollTo: 0, ease: Power4.easeInOut });
    }

    return (
        <Fragment>
            <div className={css.productsGrid}>
                {products.map(product => (
                    <ProductCard key={product.gtin} data={product} />
                ))}
            </div>

            <div className={css.pager}>
                <Stack spacing={2}>
                    <Pagination onChange={changePage} count={totalPages} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </Fragment>
    )
}

export default ProductsGrid;