import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';

import style from './SearchModal.scss';
import category from '../../assets/fake-data/category';
import SearchModalContext from '../../store/SearchModalContext';
import MessageModalContext from '../../store/MessageModalContext';
import products from '../../assets/fake-data/products';

const cx = classNames.bind(style);

function SearchModal() {
    const SearchModalContextt = useContext(SearchModalContext);
    const MessageModalContextt = useContext(MessageModalContext);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');

    const handleClick = () => {
        SearchModalContextt.setShow(false);
    };

    const emtyFun = (e) => {
        e.stopPropagation();
    }; // tach biet event giua cha va con

    const handleSearch = () => {
        const allproduct = products.getAllProducts();
        let result = allproduct.filter(
            (e) =>
                e.slug.toLowerCase().includes(searchInput.toLowerCase()) ||
                e.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                e.categorySlug.toLowerCase().includes(searchInput.toLowerCase()),
        );
        if (result.length > 0) {
            SearchModalContextt.setShow(false);
            SearchModalContextt.setSearchData(result);
            navigate('/search');
        } else {
            MessageModalContextt.setModal({
                type: 'error',
                message: 'Không tìm thấy sản phẩm phù hợp!',
                show: true,
            });
        }
    };

    return (
        <div className={cx('search-modal', { active: SearchModalContextt.show })} onClick={handleClick}>
            <div className={cx('search-modal__content')} onClick={(e) => emtyFun(e)}>
                <div className={cx('search-modal__content__search')}>
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        name=""
                        spellCheck={false}
                    />
                    <Button variant="primary" onClick={handleSearch} className="h-100">
                        Tìm kiếm
                    </Button>
                </div>
                <div className={cx('search-modal__content__popular')}>
                    <h2>Phổ biến</h2>
                    {category.map((item, index) => (
                        <Link to={'/search'} key={index}>
                            <span>{item.display}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
