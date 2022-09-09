import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions/productAction.js';
import productApi from '../../api/productApi.js';

function* fetchGetProduct() {
    try {
        const product = yield call(productApi.getAllProduct);
        yield put(actions.getProduct.getProductSuccess(product));
    } catch (err) {
        yield put(actions.getProduct.getProductFailure(err));
    }
}

function* fetchCreateProduct(action) {
    try {
        const product = yield call(productApi.createProduct, action.payload);
        yield put(actions.createProduct.createProductSuccess(product));
    } catch (error) {
        yield put(actions.createProduct.createProductFailure(error));
    }
    
}

function* productSaga() {
    yield takeLatest(actions.getProduct.getProductRequest,fetchGetProduct);
    yield takeLatest(actions.createProduct.createProductRequest,fetchCreateProduct);
}

export default productSaga;
