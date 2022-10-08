import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import productData from '../../assets/fake-data/products';
import Helmet from '../../components/Helmet';
import style from './Product.scss';
import Section, { SectionBody, SectionTitle } from '../../components/Section';
import Grid from '../../components/Grid';
import ProductCard from '../../components/ProductCard';
import ProductView from '../../components/ProductView';
import { useEffect } from 'react';

const cx = classNames.bind(style);

function Product() {
    const { pathname } = useLocation();
    const slug = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    const product = productData.getProductBySlug(slug);

    const relatedProduct = productData.getProducts(8);
    

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <Helmet title={product.title}>
            <div className={cx('container', 'main')}>
                <Section>
                    <SectionBody>
                        <ProductView product={product}></ProductView> 
                        {/* both product page and productView use scss file Product.scss */}
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>Khám phá thêm</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {relatedProduct && relatedProduct.map((item, index) => (
                                <div key={index}>
                                    <ProductCard
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
            </div>
        </Helmet>
    );
}

export default Product;
