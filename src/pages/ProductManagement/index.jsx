import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Helmet from '../../components/Helmet';
import style from './ProductManagement.scss';
import { productState$ } from '../../redux/selector';
import { getProduct } from '../../redux/actions/productAction';

const cx = classNames.bind(style);

function ProductManagement() {
    const products = useSelector(productState$);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct.getProductRequest());
    }, [dispatch]);
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <Helmet title="ProductManagement">
            <div className={cx('main','container')}>
                <Button variant='primary'>
                    <Link className='text-white' to={'/admin/addProduct'}>Thêm sản phẩm</Link>
                </Button>
                <table className={cx('table')}>
                    <tbody>
                        <tr className={cx('table-title')}>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Loại</th>
                            <th>Màu</th>
                            <th>Kích thước</th>
                            <th>Giới tính</th>
                            <th>Mô tả</th>
                            <th>Xử lí</th>
                        </tr>

                        {products &&
                            products.map((item, index) => (
                                <tr key={item._id} className={cx('table-item')}>
                                    <td className={cx('table-item__img')}>
                                        <img src={item.image01} alt="" />
                                    </td>
                                    <td className={cx('table-item__title')}>
                                        <p>{item.title}</p>
                                    </td>
                                    <td className={cx('table-item__price')}>
                                        <p>{item.price}</p>
                                    </td>
                                    <td className={cx('table-item__type')}>
                                        <p>{item.categorySlug}</p>
                                    </td>
                                    <td className={cx('table-item__color')}>
                                        <p style={{ backgroundColor: `${item.color}` }}></p>
                                    </td>
                                    <td className={cx('table-item__size')}>
                                        <p>{item.size}</p>
                                    </td>
                                    <td className={cx('table-item__gioiTinh')}>
                                        <p>{item.gioiTinh}</p>
                                    </td>
                                    <td className={cx('table-item__desc')}>
                                        <p>{item.description}</p>
                                    </td>
                                    <td className={cx('table-item__handle')}>
                                        <Button variant='primary' className='w-100'>
                                            Sửa
                                        </Button>
                                        <Button variant='primary' className='w-100 mt-2'>
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Helmet>
    );
}

export default ProductManagement;
