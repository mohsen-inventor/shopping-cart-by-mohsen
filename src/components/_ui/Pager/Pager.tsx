import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import css from './Pager.module.scss';

interface Props {

}

const Pager = (props: Props) => {
    return (
        <div className={css.pager}>
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
}

export default Pager;