import classNames from 'classnames/bind';

import style from './PolicyCard.scss';

const cx = classNames.bind(style);

function PolicyCard({ icon, name, description }) {
    const Icon = icon;
    return (
        <div className={cx('policy-card')}>
            <div className={cx('policy-card__icon')}>
                <Icon></Icon>
            </div>
            <div className={cx('policy-card__info')}>
                <div className={cx('policy-card__info__name')}>{name}</div>
                <div className={cx('policy-card__info__description')}>{description}</div>
            </div>
        </div>
    );
}

export default PolicyCard;
