import emailjs from '@emailjs/browser';
import { useContext, useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Helmet from '../../components/Helmet';
import style from './Checkouts.scss';
import CheckoutsItem from '../../components/CheckoutsItem';
import CartContext from '../../store/CartContext';
import MessageModalContext from '../../store/MessageModalContext';
import numberWithCommas from '../../utils/numberWithCommas';
import voucherr from '../../assets/fake-data/voucher';

import MessageModal from '../../components/MessageModal';

const cx = classNames.bind(style);

function Checkouts() {
    let cartProducts = [];
    let infoOrder = '';
    const CartContextt = useContext(CartContext);
    const MessageModalContextt = useContext(MessageModalContext);

    const form = useRef();

    const [feeShip, setFeeShip] = useState(35000);
    const [voucher, setVoucher] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const checkErrors = Object.keys(errors);

    const submit = (data) => {
        sendEmail();
    };

    const sendEmail = () => {
        emailjs.sendForm('service_lan75rt', 'template_3frvfi7', form.current, 'y1MHuOYWHZFiQjbi3').then(
            (result) => {
                MessageModalContextt.setModal({
                    show:true,
                    message:'Đặt hàng thành công!',
                    type:"success"
                })
            },
            (error) => {
                MessageModalContextt.setModal({
                    show:true,
                    message:'Đặt hàng không thành công!',
                    type:"error"
                })
            },
        );
    };

    // if (checkErrors.length !== 0) {
    //     // console.log(errors);
    // }

    const handleUseVoucher = () => {
        let check = false;
        voucherr.forEach((e) => {
            if (e.voucherCode === voucher) {
                setFeeShip(feeShip - e.voucherValue);
                check = true;
                MessageModalContextt.setModal({
                    show:true,
                    message:'Sử dụng mã giảm giá thành công!',
                    type:"success"
                })
                return;
            }
        });
        if (!check) {
            MessageModalContextt.setModal({
                show:true,
                message:'Sử dụng mã giảm giá không thành công!',
                type:"error"
            })
        }
    };

    useEffect(() => {
        CartContextt.updateTotalProduct(); // để 2 hàm này ở đây để mỗi lúc reload nó đều tính toán lại
        CartContextt.updateTotalPrice();
    });

    const emptyFun = () => {};

    if (JSON.parse(localStorage.getItem('CartItem')) !== null) {
        cartProducts = JSON.parse(localStorage.getItem('CartItem'));

        cartProducts.forEach((item) => {
            infoOrder += `-- ${item.title}, Màu: ${item.color}, Size: ${item.size}, Số lượng: ${item.quantity}, Gía: ${item.price} --`;
        });
    }

    return (
        <Helmet title="Checkouts">
            <div className={cx('main', 'container', 'checkouts')}>
                <MessageModal
                    active={MessageModalContextt.modal.show}
                    message={MessageModalContextt.modal.message}
                    type={MessageModalContextt.modal.type}
                ></MessageModal>
                <div className={cx('checkouts__left')}>
                    <h2 className={cx('checkouts__left__name')}>JEMCO</h2>
                    <form ref={form} id="info_form" onSubmit={handleSubmit(submit)}>
                        <div className={cx('checkouts__left__items')}>
                            <h3 className={cx('checkouts__left__items__title')}>Thông tin giao hàng</h3>

                            <div className={cx('checkouts__left__items__form')}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Họ và tên"
                                    spellCheck={false}
                                    {...register('name', { required: true })}
                                />
                                {checkErrors.length !== 0 && errors.name?.type === 'required' && (
                                    <span>Vui lòng nhập họ tên!</span>
                                )}

                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    spellCheck={false}
                                    {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                />
                                {checkErrors.length !== 0 && errors.email?.type === 'pattern' && (
                                    <span>Vui lòng nhập đúng email!</span>
                                )}

                                <input
                                    type="text"
                                    name="numberPhone"
                                    placeholder="Số điện thoại"
                                    spellCheck={false}
                                    {...register('numberPhone', { required: true })}
                                />
                                {checkErrors.length !== 0 && errors.numberPhone?.type === 'required' && (
                                    <span>Vui lòng nhập số điện thoại!</span>
                                )}

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Địa chỉ"
                                    spellCheck={false}
                                    {...register('address', { required: true })}
                                />
                                {checkErrors.length !== 0 && errors.address?.type === 'required' && (
                                    <span>Vui lòng nhập địa chỉ!</span>
                                )}

                                <input
                                    style={{ display: 'none' }}
                                    name="infoOrder"
                                    value={infoOrder}
                                    onChange={emptyFun}
                                />
                                <input
                                    style={{ display: 'none' }}
                                    name="totalPrice"
                                    value={numberWithCommas(CartContextt.totalPrice + feeShip)}
                                    onChange={emptyFun}
                                />
                            </div>
                        </div>

                        <div className={cx('checkouts__left__items')}>
                            <h3 className={cx('checkouts__left__items__title')}>Phương thức vận chuyển</h3>
                            <div className={cx('checkouts__left__items__ship')}>
                                <div>
                                    {/* <input type="radio" checked={true} /> */}
                                    <span> Giao hàng tận nơi</span>
                                </div>
                                <span>35,000 đ</span>
                            </div>
                        </div>

                        <div className={cx('checkouts__left__items')}>
                            <h3 className={cx('checkouts__left__items__title')}>Phương thức thanh toán</h3>
                            <div className={cx('checkouts__left__items__checkout')}>
                                <div className={cx('checkouts__left__items__checkout__top')}>
                                    {/* <input type="radio" checked={true} /> */}
                                    <span>Thanh toán khi nhận hàng (COD)</span>
                                </div>
                                <div className={cx('checkouts__left__items__checkout__bot')}>
                                    <p>Cảm ơn bạn đã tin dùng mua hàng tại Jemco</p>
                                    <p>
                                        Chúng tôi sẽ sớm liên hệ với bạn để Xác Nhận Đơn Hàng qua số điện thoại trước
                                        khi giao hàng!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={cx('checkouts__left__items')}>
                            <div className={cx('checkouts__left__items__btn')}>
                                <Button variant='primary' >
                                   <Link to={'/cart'} className='text-white p-4'> Giỏ hàng</Link>
                                </Button>
                                <Button type="submit" form="info_form" variant='primary'>
                                   <span className='p-4'>Hoàn tất</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={cx('checkouts__right')}>
                    <div className={cx('checkouts__right__list')}>
                        {cartProducts.map((item, index) => (
                            <CheckoutsItem key={index} item={item}></CheckoutsItem>
                        ))}
                    </div>
                    <div className={cx('checkouts__right__voucher')}>
                        <input
                            type="text"
                            spellCheck={false}
                            placeholder="Mã giảm giá"
                            value={voucher}
                            onChange={(e) => setVoucher(e.target.value)}
                        />
                        <Button variant='primary' onClick={handleUseVoucher}>
                            Sử dụng
                        </Button>
                    </div>
                    <div className={cx('checkouts__right__count')}>
                        <div>
                            <span>Tạm tính</span>
                            <span>{numberWithCommas(CartContextt.totalPrice)}</span>
                        </div>
                        <div>
                            <span>Phí vận chuyển</span>
                            <span>{numberWithCommas(feeShip)}</span>
                        </div>
                    </div>

                    <div className={cx('checkouts__right__total')}>
                        <span>Tổng cộng</span>
                        <span>{numberWithCommas(CartContextt.totalPrice + feeShip)}</span>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}

export default Checkouts;
