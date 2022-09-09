import {createActions} from 'redux-actions'

const getType=(actions)=>{
    return actions().type
}

const getProduct= createActions({
    getProductRequest:undefined,
    getProductSuccess: (payload) => payload,
    getProductFailure: (err) => err
})

const createProduct= createActions({
    createProductRequest:(payload)=>payload,
    createProductSuccess: (payload) => payload,
    createProductFailure: (err) => err
})

export {getProduct,getType,createProduct}

