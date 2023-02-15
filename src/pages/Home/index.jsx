import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import style from './Home.scss';
import Helmet from '../../components/Helmet';
import HeroSlider from '../../components/HeroSlider';
import heroSliderData from '../../assets/fake-data/hero-slider';
import Section, { SectionBody, SectionTitle } from '../../components/Section';
import policy from '../../assets/fake-data/policy';
import PolicyCard from '../../components/PolicyCard';
import Grid from '../../components/Grid';
import productData from '../../assets/fake-data/products';
import ProductCard from '../../components/ProductCard';
import banner from '../../assets/images/banner.png';

const cx = classNames.bind(style);

function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <Helmet title="Trang Chủ">
            <div className={cx('main', 'container')}>
                {/* Hero slider */}
                <HeroSlider data={heroSliderData}></HeroSlider>
                {/* End Hero slider */}
                {/* policy */}
                <Section>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {policy &&
                                policy.map((item, index) => (
                                    <Link to={'/policy'} key={index}>
                                        <PolicyCard
                                            name={item.name}
                                            description={item.description}
                                            icon={item.icon}
                                        ></PolicyCard>
                                    </Link>
                                ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/*end policy */}

                {/* end best selling */}
                <Section>
                    <SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {productData &&
                                productData.getProducts(4).map((item, index) => (
                                    <div key={index}>
                                        <ProductCard
                                            timeDelay={index}
                                            title={item.title}
                                            img01={item.image01}
                                            img02={item.image02}
                                            price={Number(item.price)}
                                            slug={item.slug}
                                        ></ProductCard>
                                    </div>
                                ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* new product */}

                {/* end new product */}
                <Section>
                    <SectionTitle>sản phẩm mới</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {productData &&
                                productData.getProducts(8).map((item, index) => (
                                    <div key={index}>
                                        <ProductCard
                                            timeDelay={index}
                                            title={item.title}
                                            img01={item.image01}
                                            img02={item.image02}
                                            price={Number(item.price)}
                                            slug={item.slug}
                                        ></ProductCard>
                                    </div>
                                ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* best selling */}

                {/* banner */}
                <Section>
                    <SectionBody>
                        <motion.img
                            src={banner}
                            alt=""
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, type: 'spring'}}
                        />
                    </SectionBody>
                </Section>

                {/* end banner */}

                {/* popular */}
                <Section>
                    <SectionTitle>Phổ biến</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {productData &&
                                productData.getProducts(12).map((item, index) => (
                                    <div key={index}>
                                        <ProductCard
                                            timeDelay={index}
                                            title={item.title}
                                            img01={item.image01}
                                            img02={item.image02}
                                            price={Number(item.price)}
                                            slug={item.slug}
                                        ></ProductCard>
                                    </div>
                                ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end popular */}
            </div>
        </Helmet>
    );
}

export default Home;
