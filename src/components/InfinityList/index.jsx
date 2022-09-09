import { useEffect, useRef, useState } from 'react';

import Grid from '../../components/Grid';
import ProductCard from '../../components/ProductCard';

function InfinityList(props) {
    const perload = 8;
    const listRef = useRef(null);

    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setData(props.data.slice(0, perload));
        setIndex(1);
    }, [props.data]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                setLoad(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [listRef]);

    useEffect(() => {
        const getData = () => {
            const pages = Math.floor(props.data.length / perload);
            const maxIndex = props.data.length % perload === 0 ? pages : pages + 1;

            if (load && index <= maxIndex) {
                const start = perload * index;
                const end = start + perload;

                setData(data.concat(props.data.slice(start, end)));
                setIndex(index + 1);
            }
        };
        getData();
        setLoad(false);
    }, [load, index, data, props.data]);

    return (
        <div ref={listRef}>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {data && data.map((item, index) => (
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
        </div>
    );
}

export default InfinityList;
