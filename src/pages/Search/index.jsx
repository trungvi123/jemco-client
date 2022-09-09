


import Helmet from '../../components/Helmet';
import Section, { SectionBody } from '../../components/Section';
import Grid from '../../components/Grid';
import ProductCard from '../../components/ProductCard';
import SearchModalContext from '../../store/SearchModalContext';

import { Container } from 'react-bootstrap';
import { useContext } from 'react';

function Search() {
    const SearchModalContextt = useContext(SearchModalContext)


    return (
        <Helmet title="Tìm kiếm">
            <div className="main">
                <Container>
                    <Section>
                        <SectionBody>
                            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                                {
                                    SearchModalContextt.searchData.map((item, index) => (
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
                </Container>
            </div>
        </Helmet>
    );
}

export default Search;
