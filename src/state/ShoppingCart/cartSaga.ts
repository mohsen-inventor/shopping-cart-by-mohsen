import axios from 'axios';
// import { CallReturnType } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Product } from '../../types';
import { CartActionType } from './cartType';
import {
    getProductsStart,
    getProductsSuccess,
    getProductsFail,
} from './cartAction';

// export const getProducts = () => axios.get<Product[]>('/api/products');

// Saga worker
function* fetchProducts() {
    try {
        const response = yield call(fetch, '/api/products');
        const data = yield response.json();
        const products: Product[] = yield data.results;
        yield put(getProductsSuccess(products));
    } catch (erorr) {
        yield put(getProductsFail(erorr.message));
    }
}

// Saga watcher (rootSaga)
function* rootSaga() {
    yield all([takeLatest(CartActionType.GetProductsStart, fetchProducts)]);
}

// export rootSaga
export default rootSaga;
