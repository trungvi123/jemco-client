import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from 'react-bootstrap';

import style from './ProductCard.scss';
import numberWithCommas from '../../utils/numberWithCommas';
import ProductModalContext from '../../store/ProductModalContext';
import { useContext } from 'react';

const cx = classNames.bind(style);

function ProductCard(props) {
    const productContext = useContext(ProductModalContext);

    const handleClick = () => {
        productContext.setHideModal(false);
        productContext.setDataModal(props.slug);
    };

    let timeDelayMotion = props.timeDelay / 10;
    return (
        <motion.div
            className={cx('product-card')}
            initial={{ translateX: -150 ,opacity:0}}
            whileInView={{ translateX: 0,opacity:1 }}
            transition={{ duration: 0.8, type: 'spring' ,delay:timeDelayMotion}}
        >
            <Link to={`/catalog/${props.slug}`}>
                <div className={cx('product-card__img')}>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className={cx('product-card__title')}>{props.title}</h3>
                <div className={cx('product-card__price')}>
                    {numberWithCommas(props.price)}
                    <span className={cx('product-card__price__old')}>
                        <del>{numberWithCommas(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className={cx('product-card__btn')}>
                <Button variant='primary'  onClick={handleClick}>
                    Chọn mua
                </Button>
            </div>
        </motion.div>
    );
}

export default ProductCard;
