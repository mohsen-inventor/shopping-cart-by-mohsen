import React from 'react';
import css from './Home.module.scss';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

interface Props {

}

const Home = (props: Props) => {
    return (
        <div className={css.home}>
            <ProductsGrid />
        </div>
    )
}

export default Home;