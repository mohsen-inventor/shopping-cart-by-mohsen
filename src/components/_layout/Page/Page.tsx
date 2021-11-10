import React from 'react';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

type Props = {
    children: React.ReactNode;
};

const Page = ({ children }: Props) => {
    return (
        <div>
            <PageHeader />
            {children}
            <PageFooter />
        </div>
    )
}


export default Page;