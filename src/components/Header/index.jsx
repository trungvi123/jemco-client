import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    BiUser,
    BiCart,
    BiSearch,
    BiMenuAltLeft,
    BiChevronLeft,
    BiCog,
    BiLogOutCircle,
    BiPackage,
} from 'react-icons/bi';
import { useRef, useEffect, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import TippyHeadless from '@tippyjs/react/headless';

import style from './Header.scss';
import logo from '../../assets/images/logo-2.png';
import CartContext from '../../store/CartContext';
import SearchModal from '../SearchModal';
import MessageModalContext from '../../store/MessageModalContext';
import SearchModalContext from '../../store/SearchModalContext';

const cx = classNames.bind(style);

const navList = [
    {
        display: 'Trang Chủ',
        path: '/',
    },
    {
        display: 'Giới thiệu',
        path: '/about-us',
    },
    {
        display: 'Sản Phẩm',
        path: '/catalog',
    },

    {
        display: 'Liên Hệ',
        path: '/contact',
    },
];

function Header() {
    const { pathname } = useLocation();

    const navi = useNavigate();

    const headerRef = useRef(null);
    const menuLeftRef = useRef(null);
    const logoRef = useRef(null);

    const CartContextt = useContext(CartContext);
    const SearchModalContextt = useContext(SearchModalContext);
    const MessageModalContextt = useContext(MessageModalContext);

    const [showUserMenu, setShowUserMenu] = useState(false);

    const activeNav = navList.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.style.height = '70px';
                headerRef.current.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
                logoRef.current.style.height = '70px';
            } else {
                headerRef.current.style.height = '';
                logoRef.current.style.height = '';
                headerRef.current.style.boxShadow = '';
            }
        };
        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    useEffect(() => {
        CartContextt.updateTotalProduct(); // MỖI LẦN reload đều tính toán lại, vì sài useState mà bấm reload thì nó sẽ set lại = 0
    });

    const isLogin = JSON.parse(localStorage.getItem('login'))?.login;
    const isAdmin = JSON.parse(localStorage.getItem('user'))?.isAdmin;

    const menuToggle = () => menuLeftRef.current.classList.toggle('active');

    const handleLogOut = () => {
        localStorage.setItem('login', JSON.stringify({ login: false }));
        MessageModalContextt.setModal({
            type: 'success',
            message: 'Đăng xuất thành công',
            show: true,
        });
        navi('/');
    };

    const handleOption = () => {
        MessageModalContextt.setModal({
            type: 'success',
            message: 'Coming soon',
            show: true,
        });
    };

    return (
        <header id='header' ref={headerRef} className={cx('header')}>
              

            <div className={cx('container')}>
                <SearchModal></SearchModal>
                <div className={cx('header__menu')}>
                    <div onClick={menuToggle} className={cx('header__menu__mobile__toggle')}>
                        <BiMenuAltLeft></BiMenuAltLeft>
                    </div>
                    <div ref={menuLeftRef} className={cx('header__menu__left')}>
                        {navList &&
                            navList.map((item, i) => (
                                <div
                                    key={i}
                                    className={cx('header__menu__item', 'header__menu__left__item', {
                                        active: i === activeNav,
                                    })}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))}
                        <div onClick={menuToggle} className={cx('header__menu__left__close')}>
                            <Button variant="primary" className=" mt-4 p-3">
                                <BiChevronLeft></BiChevronLeft>
                            </Button>
                        </div>
                    </div>
                    <div ref={logoRef} className={cx('header__menu__logo')}>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className={cx('header__menu__right')}>
                        <div
                            className={cx('header__menu__item', 'header__menu__right__item')}
                            onClick={() => SearchModalContextt.setShow(!SearchModalContextt.show)}
                        >
                            <BiSearch />
                        </div>
                        <div className={cx('header__menu__item', 'header__menu__right__item')}>
                            <Link to="/cart">
                                <BiCart></BiCart>
                                <div className={cx('totalProduct')}>
                                    {CartContextt.totalProduct > 0 ? CartContextt.totalProduct : ''}
                                </div>
                            </Link>
                        </div>

                        <div className={cx('header__menu__item', 'header__menu__right__item')}>
                            <TippyHeadless
                                visible={showUserMenu && isLogin}
                                interactive
                                onClickOutside={() => setShowUserMenu(false)}
                                render={(props) => (
                                    <div {...props} className={cx('user-menu')}>
                                        <div onClick={handleOption} className={cx('user-menu__item')}>
                                            <BiCog></BiCog> <span>Tùy chọn</span>
                                        </div>

                                        {isAdmin && (
                                            <Link className={cx('user-menu__item')} to={'/admin'}>
                                                <BiPackage />
                                                <span>Quản lí</span>
                                            </Link>
                                        )}

                                        <div onClick={handleLogOut} className={cx('user-menu__item')}>
                                            <BiLogOutCircle></BiLogOutCircle>
                                            <span>Đăng xuất</span>
                                        </div>
                                    </div>
                                )}
                            >
                                <Link to={isLogin ? '' : '/login'} onClick={() => setShowUserMenu(!showUserMenu)}>
                                    <BiUser className={cx('user-icon')} />
                                </Link>
                            </TippyHeadless>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
