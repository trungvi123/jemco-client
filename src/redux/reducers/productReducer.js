import INIT_STATE from '../../constant';
import { getType, getProduct,createProduct } from '../actions/productAction';

const productReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case getType(getProduct.getProductRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getProduct.getProductSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(getProduct.getProductFailure):
            return {
                ...state,
                isLoading: false,
            };
        case getType(createProduct.createProductRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(createProduct.createProductSuccess):
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload],
            };
        case getType(createProduct.createProductFailure):
            return {
                ...state,
                isLoading: false,
            };
        default:
            break;
    }


    
};
export default productReducer;
