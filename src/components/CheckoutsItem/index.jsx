import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from '../../pages/Checkouts/Checkouts.scss';
import numberWithCommas from '../../utils/numberWithCommas';

const cx = classNames.bind(style);

function CheckoutsItem(props) {
    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.quantity);

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props.item]);

    return (
        <div className={cx('checkouts__item')}>
            <div className={cx('checkouts__item__info')}>
                <div className={cx('checkouts__item__info__img')}>
                    <img src={item.img} alt="" />
                </div>
                <div className={cx('checkouts__item__info__text')}>
                    <Link to={`/catalog/${item.slug}`}>{`${item.title} / ${item.color}`}</Link>
                    <span>Số lượng: {quantity}</span>
                    <span>{item.size}</span>
                </div>
            </div>

            <div className={cx('checkouts__item__price')}>{numberWithCommas(Number(item.price))}</div>
        </div>
    );
}

export default CheckoutsItem;
