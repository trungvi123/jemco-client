import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../../pages/Product/Product.scss';
import { Button } from 'react-bootstrap';

import numberWithCommas from '../../utils/numberWithCommas';
import { BiPlus, BiMinus } from 'react-icons/bi';
import ProductModalContext from '../../store/ProductModalContext';
import MessageModalContext from '../../store/MessageModalContext';

const cx = classNames.bind(style);

function ProductView({ product }) {
    let navigate = useNavigate();

    const [previewImg, setPreviewImg] = useState();
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    const ProductModalContextt = useContext(ProductModalContext);
    const MessageModalContextt = useContext(MessageModalContext);

    const isLogin = JSON.parse(localStorage.getItem('login'))?.login;

    useEffect(() => {
        setPreviewImg(product.image01);
        setColor(undefined);
        setSize(undefined);
        setQuantity(1);
    }, [product]);

    const updateQuantity = (type) => {
        if (type === 'minus') {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const check = () => {
        if (color === undefined) {
            MessageModalContextt.setModal({
                show: true,
                message: 'Vui lòng chọn màu sắc!',
                type: 'error',
            });
            return false;
        }

        if (size === undefined) {
            MessageModalContextt.setModal({
                show: true,
                message: 'Vui lòng chọn kích thước!',
                type: 'error',
            });
            return false;
        }

        return true;
    };

    const handleCart = (product) => {
        let updateCart = [];

        const newItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.image01,
            color: color,
            size: size,
            quantity: quantity,
        };

        if (JSON.parse(localStorage.getItem('CartItem')) === null) {
            updateCart.push(newItem);
            localStorage.setItem('CartItem', JSON.stringify(updateCart));
        } else {
            updateCart = JSON.parse(localStorage.getItem('CartItem'));
            var result = updateCart.find((itemCart) => {
                if (itemCart.id === newItem.id && itemCart.color === newItem.color && itemCart.size === newItem.size) {
                    return itemCart.id === newItem.id;
                } else {
                    return undefined;
                }
            });

            if (result === undefined) {
                updateCart.push(newItem);
            } else {
                result.quantity += 1;
            }
            localStorage.setItem('CartItem', JSON.stringify(updateCart));
        }
    };

    const addToCart = () => {
        if (!isLogin) {
            navigate('/login');
        } else {
            if (check()) {
                handleCart(product);
                MessageModalContextt.setModal({
                    show: true,
                    message: 'Thêm sản phẩm vào giỏ hàng thành công!',
                    type: 'success',
                });
                ProductModalContextt.setHideModal(true);
            }
        }
    };

    const goToCart = () => {
        if (!isLogin) {
            navigate('/login');
        } else {
            if (check()) {
                handleCart(product);
                ProductModalContextt.setHideModal(true);
                navigate('/cart');
            }
        }
    };

    return (
        <div className={cx('product')}>
            <div className={cx('product__img')}>
                <div className={cx('product__img__list')}>
                    <div className={cx('product__img__list__item')}>
                        <img src={product.image01} alt="" onClick={() => setPreviewImg(product.image01)} />
                    </div>
                    <div className={cx('product__img__list__item')}>
                        <img src={product.image02} alt="" onClick={() => setPreviewImg(product.image02)} />
                    </div>
                </div>
                <div className={cx('product__img__main')}>
                    <img src={previewImg} alt="" />
                </div>
                <div className={cx('product-desription', { descriptionExpand })}>
                    <div className={cx('product-desription__title')}>Chi tiết sản phẩm</div>
                    <div
                        className={cx('product-desription__content')}
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className={cx('product-desription__toggle')}>
                        <Button variant="primary" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('product__info')}>
                <h1 className={cx('product__info__title')}>{product.title}</h1>

                <div className={cx('product__info__item')}>
                    <span className={cx('product__info__item__price')}>{numberWithCommas(product.price)}</span>
                </div>

                <div className={cx('product__info__item')}>
                    <div className={cx('product__info__item__title')}>Màu sắc</div>
                    <div className={cx('product__info__item__list')}>
                        {product &&
                            product.colors.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('product__info__item__list__item', { active: color === item })}
                                    onClick={() => setColor(item)}
                                >
                                    <div className={cx('circle', `bg-${item}`)}></div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className={cx('product__info__item')}>
                    <div className={cx('product__info__item__title')}>Kích thước</div>
                    <div className={cx('product__info__item__list')}>
                        {product &&
                            product.size.map((item, index) => (
                                <div
                                    onClick={() => setSize(item)}
                                    key={index}
                                    className={cx('product__info__item__list__item', { active: size === item })}
                                >
                                    <div className={cx('product__info__item__list__item__size')}>{item}</div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className={cx('product__info__item')}>
                    <div className={cx('product__info__item__title')}>Số lượng</div>
                    <div className={cx('product__info__item__quantity')}>
                        <div
                            className={cx('product__info__item__quantity__btn')}
                            onClick={() => updateQuantity('minus')}
                        >
                            <BiMinus></BiMinus>
                        </div>
                        <div className={cx('product__info__item__quantity__input')}>{quantity}</div>
                        <div
                            className={cx('product__info__item__quantity__btn')}
                            onClick={() => updateQuantity('plus')}
                        >
                            <BiPlus></BiPlus>
                        </div>
                    </div>
                </div>

                <div className={cx('product__info__btn')}>
                    <Button variant="primary" onClick={addToCart}>
                        Thêm vào giỏ
                    </Button>
                    <Button variant="primary" onClick={goToCart}>
                        Mua ngay
                    </Button>
                </div>
            </div>
            <div className={cx('product-desription', 'mobile', { descriptionExpand })}>
                <div className={cx('product-desription__title')}>Chi tiết sản phẩm </div>

                <div
                    className={cx('product-desription__content')}
                    dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
                <div className={cx('product-desription__toggle')}>
                    <Button variant="primary" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {!descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
