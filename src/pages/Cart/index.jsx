import { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartContext from '../../store/CartContext';
import Helmet from '../../components/Helmet';
import style from './Cart.scss';
import numberWithCommas from '../../utils/numberWithCommas';
import CartItem from '../../components/CartItem';

const cx = classNames.bind(style);

function Cart() {
    const CartContextt = useContext(CartContext);
    let cartProducts = []; // chua tat ca cac sp da them vao cart

    useEffect(() => {
        CartContextt.updateTotalProduct(); // để 2 hàm này ở đây để mỗi lúc reload nó đều tính toán lại
        CartContextt.updateTotalPrice();
    });

    if (JSON.parse(localStorage.getItem('CartItem')) !== null) {
        cartProducts = JSON.parse(localStorage.getItem('CartItem'));
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <Helmet title="Giỏ hàng">
            <div className={cx('main', 'container', 'cart')}>
                <div className={cx('cart__info')}>
                    <div className={cx('cart__info__txt')}>
                        <p>Bạn đang có {CartContextt.totalProduct} sản phẩm trong giỏ hàng</p>
                        <div className={cx('cart__info__txt__price')}>
                            <span>Thành tiền</span>
                            <span>{numberWithCommas(CartContextt.totalPrice)}</span>
                        </div>
                    </div>
                    <div className={cx('cart__info__btn')}>
                        <Button variant="primary" className='w-100'>
                            <Link to={'/checkouts'} className='text-white d-block'>Đặt hàng</Link>
                        </Button>
                        <Button variant="primary" className='w-100'>
                            <Link to={'/catalog'} className='text-white d-block'>Tiếp tục mua</Link>
                        </Button>
                    </div>
                </div>

                <div className={cx('cart__list')}>
                    {cartProducts.map((item, index) => (
                        <CartItem key={index} item={item}></CartItem>
                    ))}
                </div>
            </div>
        </Helmet>
    );
}

export default Cart;
