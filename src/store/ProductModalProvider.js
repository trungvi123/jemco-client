import { useState } from 'react';
import ProductModalContext from './ProductModalContext';
import productData from '../assets/fake-data/products'; 

function ProductModalProvider({ children }) {
    const [hideModal, setHideModal] = useState(true);
    const [dataModal,setDataModal] = useState(productData.getProductEmpty)

    return (
        <ProductModalContext.Provider value={{ hideModal, setHideModal ,dataModal,setDataModal}}>
            {children}
        </ProductModalContext.Provider>
    );
}

export default ProductModalProvider;
