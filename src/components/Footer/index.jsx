/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import {useEffect, useRef} from 'react'
import Grid from '../Grid';
import logo from '../../assets/images/logo-2.png';
import style from './footer.scss';
import { BiChevronUpCircle } from 'react-icons/bi';

const cx = classNames.bind(style);

const footerAboutLinks = [
    { display: 'Giới Thiệu', path: '/about-us' },
    { display: 'Liên Hệ', path: '/contact' },
    { display: 'Tin Tức', path: '/about-us' },
];

const footerCustomerLinks = [
    { display: 'Chính Sách Đổi Trả', path: '/customer-care/returnGoods' },
    { display: 'Chính Sách Bảo Hành', path: '/customer-care/insurance' },
    { display: 'Chính Sách Hoàn Tiền', path: '/customer-care/returnMoney' },
];

function Footer() {
    const goTopIcon = useRef()
    useEffect(() => {
        const showIconTop = () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                goTopIcon.current.style.display = 'block';
            } else {
                goTopIcon.current.style.display = 'none';
            }
        };
        window.addEventListener('scroll', showIconTop);

        return () => {
            window.removeEventListener('scroll', showIconTop);
        };
    }, []);
    return (
        <div>
            {/* onTop */}

            <a ref={goTopIcon} href="#">
                <BiChevronUpCircle  className={cx('goTopIcon')}></BiChevronUpCircle>
            </a>

            <footer className={cx('footer')}>
                <div className={cx('container')}>
                    <Grid className={cx('footer__box')} col={4} mdCol={2} smCol={1} gap={10}>
                        <div>
                            <h4 className={cx('footer__title')}>Tổng Đài Hổ Trợ</h4>
                            <div className={cx('footer__content')}>
                                <p>
                                    Liên Hệ Đặt Hàng: <strong>0999999999</strong>
                                </p>
                                <p>
                                    Thắc Mắc Đơn Hàng:{' '}
                                    <a target="blank" href="https://www.facebook.com/jemco.closet.vn/">
                                        Liên hệ
                                    </a>
                                </p>
                                <p>
                                    Góp Ý, Khiếu Nại: <strong>trungvibui123@gmai.com</strong>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className={cx('footer__title')}>Về Jemco</h4>
                            <div className={cx('footer__content')}>
                                {footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className={cx('footer__title')}>Chăm Sóc Khách Hàng</h4>
                            <div className={cx('footer__content')}>
                                {footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Link to={'/'} className={cx('footer__logo__box')}>
                                <img className={cx('footer__logo')} src={logo} alt="footer__logo" />
                            </Link>
                            <p>
                                Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng
                                Việt. Hãy cùng Jemco hướng đến một cuộc sống năng động, tích cực hơn.
                            </p>
                        </div>
                    </Grid>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
