import classNames from 'classnames/bind';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Button } from 'react-bootstrap';


import style from './Catalog.scss';
import Helmet from '../../components/Helmet';
import productData from '../../assets/fake-data/products';
import category from '../../assets/fake-data/category';
import colors from '../../assets/fake-data/product-color';
import sizes from '../../assets/fake-data/product-size';
import InfinityList from '../../components/InfinityList';

const cx = classNames.bind(style);

function Catalog() {
    const initFilter = {
        category: [],
        color: [],
        size: [],
    };
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const filterRef = useRef(null);

    const productList = productData.getAllProducts();

    const [filter, setFilter] = useState(initFilter);

    const [products, setProducts] = useState(productList);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
                    break;
                case 'COLOR':
                    setFilter({ ...filter, color: [...filter.color, item.color] });
                    break;
                case 'SIZE':
                    setFilter({ ...filter, size: [...filter.size, item.size] });
                    break;
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter((e) => e !== item.categorySlug);
                    setFilter({ ...filter, category: newCategory });
                    break;
                case 'COLOR':
                    const newColor = filter.color.filter((e) => e !== item.color);
                    setFilter({ ...filter, color: newColor });
                    break;
                case 'SIZE':
                    const newSize = filter.size.filter((e) => e !== item.size);
                    setFilter({ ...filter, size: newSize });
                    break;
                default:
            }
        }
    };

    const updateProducts = useCallback(() => {
        let temp = productList; // tao 1 mảng tạm

        if (filter.category.length > 0) {
            temp = temp.filter((e) => filter.category.includes(e.categorySlug));
            // lap qua tung phan tu, neu ptu khong co slug duoc chon thi se tach ptu do ra khoi mang
        }

        if (filter.color.length > 0) {
            temp = temp.filter((e) => {
                const check = e.colors.find((color) => filter.color.includes(color));
                // lap qua cac phan tu cua e.colors va tim kiem ptu co chua màu theo yêu cầu hay không
                return check !== undefined;
                //  trả về true flase đê lọc bỏ các phẩn tử k phù hợp
            });
        }

        if (filter.size.length > 0) {
            temp = temp.filter((e) => {
                const check = e.size.find((si) => filter.size.includes(si));
                // lap qua cac phan tu cua e.colors va tim kiem ptu co chua size theo yêu cầu hay không
                return check !== undefined;
                //  trả về true flase đê lọc bỏ các phẩn tử k phù hợp
            });
        }

        setProducts(temp);
    }, [filter, productList]);

    useEffect(() => {
        updateProducts();
    }, [filter, updateProducts]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const showHideFilter = () => {
        filterRef.current.classList.toggle('active');
    };

    return (
        <Helmet title="Sản Phẩm">
            <div className={cx('catalog', 'container', 'main')}>
                <div ref={filterRef} className={cx('catalog__filter')}>
                    <div className={cx('catalog__filter__close')}>
                        <Button variant='primary' onClick={showHideFilter}>
                            <BiLeftArrowAlt></BiLeftArrowAlt>
                        </Button>
                    </div>
                    <div className={cx('catalog__filter__widget')}>
                        <div className={cx('catalog__filter__widget__title')}>Danh mục sản phẩm</div>
                        <div className={cx('catalog__filter__widget__content')}>
                            {category.map((item, index) => (
                                <div className={cx('catalog__filter__widget__content__item')} key={index}>
                                    <input
                                        checked={filter.category.includes(item.categorySlug)}
                                        onChange={(input) => filterSelect('CATEGORY', input.target.checked, item)}
                                        id={'item__type__input' + index}
                                        type="checkbox"
                                    />
                                    <label htmlFor={'item__type__input' + index}>{item.display}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('catalog__filter__widget')}>
                        <div className={cx('catalog__filter__widget__title')}>Màu sắc</div>
                        <div className={cx('catalog__filter__widget__content')}>
                            {colors.map((item, index) => (
                                <div className={cx('catalog__filter__widget__content__item')} key={index}>
                                    <input
                                        checked={filter.color.includes(item.color)}
                                        onChange={(input) => filterSelect('COLOR', input.target.checked, item)}
                                        id={'item__color__input' + index}
                                        type="checkbox"
                                    />
                                    <label htmlFor={'item__color__input' + index}>{item.display}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('catalog__filter__widget')}>
                        <div className={cx('catalog__filter__widget__title')}>Kích thước</div>
                        <div className={cx('catalog__filter__widget__content')}>
                            {sizes.map((item, index) => (
                                <div className={cx('catalog__filter__widget__content__item')} key={index}>
                                    <input
                                        checked={filter.size.includes(item.size)}
                                        onChange={(input) => filterSelect('SIZE', input.target.checked, item)}
                                        id={'item__size__input' + index}
                                        type="checkbox"
                                    />
                                    <label htmlFor={'item__size__input' + index}>{item.display}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button variant='primary' onClick={() => setFilter(initFilter)}>
                        Xóa bộ lọc
                    </Button>
                </div>
                <div className={cx('catalog__toggle')}>
                    <Button variant='primary' onClick={showHideFilter}>
                        Bộ lọc
                    </Button>
                </div>
                <div className={cx('catalog__content')}>
                    <InfinityList data={products}></InfinityList>
                </div>
            </div>
        </Helmet>
    );
}

export default Catalog;
