import React from 'react';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

// CSS
import css from './Page.module.scss';

type Props = {
    children: React.ReactNode;
};

const Page = ({ children }: Props) => {
    return (
        <div className={css.page}>
            <PageHeader />
            {children}
            <PageFooter />
        </div>
    )
}


export default Page;