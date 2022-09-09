import { BiX } from 'react-icons/bi';
import classNames from 'classnames/bind';

import style from './ProductViewModal.scss';
import ProductView from '../ProductView';
import productData from '../../assets/fake-data/products';
import ProductModalContext from '../../store/ProductModalContext';
import { useContext } from 'react';

const cx = classNames.bind(style);

const ProductViewModal = () => {
    const productContext = useContext(ProductModalContext);

    const product = productData.getProductBySlug(productContext.dataModal);

    const closeModal = () => {
        productContext.setHideModal(true);
    };

    const emtyFun = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={cx('product-view__modal', { active: !productContext.hideModal })} onClick={closeModal}>
            <div onClick={(e)=>emtyFun(e)} className={cx('product-view__modal__content')}>
                <ProductView product={product ? product : productData.getProductEmpty()}></ProductView>
                <div className={cx('product-view__modal__content__close')} onClick={closeModal}>
                    <BiX></BiX>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
