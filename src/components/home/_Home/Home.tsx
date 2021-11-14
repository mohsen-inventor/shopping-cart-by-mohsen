import React from 'react';
import css from './Home.module.scss';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import Pager from '../../_ui/Pager/Pager';

interface Props {

}

const Home = (props: Props) => {
    return (
        <div className={css.home}>
            <ProductsGrid />
            <Pager />
        </div>
    )
}

export default Home;