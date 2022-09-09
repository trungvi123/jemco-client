import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from './reportWebVitals';
import App from './App';
import ProductModalProvider from './store/ProductModalProvider';
import CartProvider from './store/CartProvider';
import MessageModalProvider from './store/MessageModalProvider';
import SearchModalProvider from './store/SearchModalProvider';
// import { Provider } from 'react-redux';
// import { createStore,applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import productReducer from './redux/reducers/productReducer';
// import productSaga from './redux/sagas/productSaga';
const root = ReactDOM.createRoot(document.getElementById('root'));


// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(productReducer,applyMiddleware(sagaMiddleware))

// sagaMiddleware.run(productSaga)

root.render(
    // <React.StrictMode>
        <Router>
            {/* <Provider store={store}> */}
                <ProductModalProvider>
                    <MessageModalProvider>
                        <CartProvider>
                            <SearchModalProvider>
                                <App />
                            </SearchModalProvider>
                        </CartProvider>
                    </MessageModalProvider>
                </ProductModalProvider>
            {/* </Provider> */}
        </Router>
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
