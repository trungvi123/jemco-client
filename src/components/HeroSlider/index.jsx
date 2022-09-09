import classNames from 'classnames/bind';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import style from './HeroSlider.scss';

const cx = classNames.bind(style);

function HeroSlider(props) {
    const data = props.data;

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            grabCursor={true}
            spaceBetween={0}
            autoplay={{ delay: 6000 }}
        >
            <div className={cx('hero-slider')}>
                {data && data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <HeroSliderItem data={item}></HeroSliderItem>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
}

function HeroSliderItem(props) {
    return (
        <div className={cx('hero-slider__item')}>
            <div
                
                className={cx('hero-slider__item__info')}
            >
                <div className={cx('hero-slider__item__info__title', `color-${props.data.color}`)}>
                    <span>{props.data.title}</span>
                </div>
                <div className={cx('hero-slider__item__info__description')}>
                    <span>{props.data.description}</span>
                </div>

                <button
                    className={cx('hero-slider__item__info__btn',`bg-${props.data.color}`,'p-3')}
                    
                >
                    <Link className='p-4 text-white' to={props.data.path}>Xem chi tiết</Link>
                </button>
            </div>
            <div className={cx('hero-slider__item__img')}>
                <motion.img
                    initial={{ rotate: 40,scale:0.5 }}
                    whileInView={{ rotate: 0 ,scale:1}}
                    transition={{ duration:1, type: 'spring' }}
                    src={props.data.img}
                    alt=""
                />
                <div className={cx('shape', `bg-${props.data.color}`)}></div>
            </div>
        </div>
    );
}

export default HeroSlider;
