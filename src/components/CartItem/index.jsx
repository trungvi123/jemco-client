import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi';

import style from '../../pages/Cart/Cart.scss';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../utils/numberWithCommas';

const cx = classNames.bind(style);

function CartItem(props) {
    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.quantity);
    const { pathname } = useLocation();

    let navigate = useNavigate();

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props.item]);

    const updateQuantity = (type) => {
        if (type === 'minus') {
            if (quantity - 1 >= 1) {
                setQuantity(quantity - 1);
                navigate(pathname);
                changeQuantity(quantity - 1);
            }
        } else {
            setQuantity(quantity + 1);
            navigate(pathname);
            changeQuantity(quantity + 1); // tai vi luc nay quantity chua dc + them 1 nên xảy ra tình trạng bấm 2 lần mới cộng lên
        }
    };

    const DeleteItem = (idItem) => {
        let custommerCart = JSON.parse(localStorage.getItem('CartItem'));
        let updateCart = [];
        custommerCart.forEach(function (item) {
            // nếu không phải id cần xóa thì cho vào mảng riêng
            if (item.id !== idItem) {
                updateCart.push(item);
            }
        });
        navigate('/cart');
        // set lại CartItem mà k có phần tử muốn xóa
        localStorage.setItem('CartItem', JSON.stringify(updateCart));
    };

    const changeQuantity = (quantityy) => {
        //  Lấy các item của Cart
        let updateCart = JSON.parse(localStorage.getItem('CartItem'));
        //result là item mà ta cần tìm để chỉnh sửa số lượng khi ng dùng thay đổi
        var result = updateCart.find((itemCart) => {
            return itemCart.id === item.id;
        });
        // Gán giá trị của item trên Cart bằng giá trị mà ng dùng thay đổi
        // this.value hiện tại đang là chuỗi
        // nên ta phải đổi sang số để khi cộng quantily không có bug
        result.quantity = Number(quantityy);
        // cẬP NHẬT lại Cart
        localStorage.setItem('CartItem', JSON.stringify(updateCart));
    };

    return (
        <div className={cx('cart__item')}>
            <div className={cx('cart__item__img')}>
                <img src={item.img} alt="" />
            </div>
            <div className={cx('cart__item__info')}>
                <div className={cx('cart__item__info__name')}>
                    <Link to={`/catalog/${item.slug}`}>{`${item.title} - ${item.color} - ${item.size}`}</Link>
                </div>

                <div className={cx('cart__item__info__price')}>{numberWithCommas(Number(item.price))}</div>

                <div className={cx('cart__item__info__quantity')}>
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
                <div className={cx('cart__item__info__del')} onClick={() => DeleteItem(item.id)}>
                    <BiTrash></BiTrash>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
