import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import style from './AddProduct.scss';
import Helmet from '../../components/Helmet';
import { createProduct } from '../../redux/actions/productAction';

const cx = classNames.bind(style);

function AddProduct() {
    const dispatch = useDispatch();
    const [linkImg,setLinkImg] = useState('')

    const [data, setData] = useState({
        title: '',
        price: '',
        image01: '',
        image02: '',
        linkImg: linkImg,
        categorySlug: 'ao-thun',
        color: '#007FFF',
        slug: '',
        size: 'Freesize',
        gioiTinh: 'Nam',
        description: '',
    });

    const handleAdd = () => {
        dispatch(createProduct.createProductRequest(data));
    };

    return (
        <Helmet title="AddProduct">
            <div className={cx('main', 'container')}>
                <div className={cx('nav')}>
                    <Button variant='primary' >
                        <Link to={'/admin/productManagement'}>
                        Quản lí sản phẩm
                        </Link>
                        
                    </Button>
                </div>
                <table className={cx('product-table')}>
                    <tbody>
                        <tr>
                            <th>Tên</th>
                            <td className={cx('product-table__name')}>
                                <input
                                    value={data.title}
                                    onChange={(e) => setData({ ...data, title: e.target.value })}
                                    type="text"
                                    spellCheck={false}
                                    placeholder="Nhập tên sản phẩm"
                                />
                            </td>
                        </tr>

                        <tr>
                            <th>Giá</th>
                            <td className={cx('product-table__price')}>
                                <input
                                    value={data.price}
                                    onChange={(e) => setData({ ...data, price: e.target.value })}
                                    type="text"
                                    spellCheck={false}
                                    placeholder="vd: 100000"
                                />
                            </td>
                        </tr>

                        <tr>
                            <th>Ảnh</th>
                            <td className={cx('product-table__img')}>
                                <div className={cx('product-table__img__item')}>
                                    <label htmlFor="">Ảnh 1:</label>

                                    <FileBase64
                                        type="file"
                                        onDone={({ base64 }) => setData({ ...data, image01: base64 })}
                                    />
                                    {data.image01 !== '' && <img src={data.image01} alt="" />}
                                </div>

                                <div className={cx('product-table__img__item')}>
                                    <label htmlFor="">Ảnh 2 (nếu có):</label>
                                    <FileBase64
                                        type="file"
                                        onDone={({ base64 }) => setData({ ...data, image02: base64 })}
                                    />
                                    {data.image02 !== '' && <img src={data.image02} alt="" />}
                                </div>

                                <div className={cx('product-table__img__item')}>
                                    <label htmlFor="">Link ảnh (nếu có):</label>
                                    <input type="text" onChange={(e)=>setLinkImg(e.target.value)} placeholder='Dán link ảnh:'/>
                                    { linkImg !== '' && <img src={linkImg} alt="" />}
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Loại</th>
                            <td className={cx('product-table__select')}>
                                <select
                                    value={data.categorySlug}
                                    onChange={(e) => setData({ ...data, categorySlug: e.target.value })}
                                    id="type"
                                    name="type"
                                >
                                    <option value="ao-thun">Áo thun</option>
                                    <option value="ao-somi">Áo sơmi</option>
                                    <option value="ao-khoac">Áo khoác</option>
                                    <option value="ao-kieu">Áo kiểu</option>
                                    <option value="quan-jean">Quần Jean</option>
                                    <option value="quan-cargo-pants">Quần Cargo Pants</option>
                                    <option value="quan-thun-ngan">Quần thun ngắn</option>
                                    <option value="quan-thun-dai">Quần thun dài</option>
                                    <option value="vay">Váy</option>
                                    <option value="chan-vay">Chân váy</option>
                                    <option value="croptop">Croptop</option>
                                    <option value="phu-kien">Phụ kiện</option>
                                    <option value="khac">khác...</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>Màu</th>
                            <td className={cx('product-table__select')}>
                                <select
                                    value={data.color}
                                    onChange={(e) => setData({ ...data, color: e.target.value })}
                                    id="color"
                                    name="color"
                                >
                                    <option style={{ backgroundColor: '#007FFF' }} value="#007FFF">
                                        Xanh da trời
                                    </option>
                                    <option style={{ backgroundColor: '#F5F5DC' }} value="#F5F5DC">
                                        Be
                                    </option>
                                    <option style={{ backgroundColor: '#000000' }} value="#000000">
                                        Đen
                                    </option>
                                    <option style={{ backgroundColor: '#964B00' }} value="#964B00">
                                        Nâu
                                    </option>
                                    <option style={{ backgroundColor: '#704214' }} value="#704214">
                                        Nâu đen
                                    </option>
                                    <option style={{ backgroundColor: '#FFFDD0' }} value="#FFFDD0">
                                        Kem
                                    </option>
                                    <option style={{ backgroundColor: '#C0C0C0' }} value="#C0C0C0">
                                        Bạc
                                    </option>
                                    <option style={{ backgroundColor: '#BF00BF' }} value="#BF00BF">
                                        Tím
                                    </option>
                                    <option style={{ backgroundColor: '#FFFFFF' }} value="#FFFFFF">
                                        Trắng
                                    </option>
                                    <option style={{ backgroundColor: '#FFFF00' }} value="#FFFF00">
                                        Vàng
                                    </option>
                                    <option style={{ backgroundColor: '#FF0000' }} value="#FF0000">
                                        Đỏ
                                    </option>
                                    <option style={{ backgroundColor: '#FF2400' }} value="#FF2400">
                                        Đỏ tươi
                                    </option>
                                    <option style={{ backgroundColor: '#B87333' }} value="#B87333">
                                        Đồng
                                    </option>
                                    <option style={{ backgroundColor: '#808080' }} value="#808080">
                                        Xám
                                    </option>
                                    <option style={{ backgroundColor: '#00FF00' }} value="#00FF00">
                                        Xanh lá cây
                                    </option>
                                    <option style={{ backgroundColor: '#FFC0CB' }} value="#FFC0CB">
                                        Hồng
                                    </option>
                                    <option style={{ backgroundColor: '#FFBF00' }} value="#FFBF00">
                                        Hổ phách
                                    </option>
                                    <option style={{ backgroundColor: '#9966CC' }} value="#9966CC">
                                        Ametit
                                    </option>
                                    <option style={{ backgroundColor: '#7FFFD4' }} value="#7FFFD4">
                                        Xanh berin
                                    </option>
                                    <option style={{ backgroundColor: '#3D2B1F' }} value="#3D2B1F">
                                        Nâu sẫm
                                    </option>
                                    <option style={{ backgroundColor: '#0000FF' }} value="#0000FF">
                                        Xanh dương
                                    </option>
                                    <option style={{ backgroundColor: '#F0DC82' }} value="#F0DC82">
                                        Da bò
                                    </option>
                                    <option style={{ backgroundColor: '#CC5500' }} value="#CC5500">
                                        Cam cháy
                                    </option>
                                    <option style={{ backgroundColor: '#C41E3A' }} value="#C41E3A">
                                        Hồng y
                                    </option>
                                    <option style={{ backgroundColor: '#ACE1AF' }} value="#ACE1AF">
                                        Men ngọc
                                    </option>
                                    <option style={{ backgroundColor: '#DE3163' }} value="#DE3163">
                                        Anh đào
                                    </option>
                                    <option style={{ backgroundColor: '#7FFF00' }} value="#7FFF00">
                                        Xanh nõn chuối
                                    </option>
                                    <option style={{ backgroundColor: '#0047AB' }} value="#0047AB">
                                        Xanh cô ban
                                    </option>
                                    <option style={{ backgroundColor: '#FF7F50' }} value="#FF7F50">
                                        San hô
                                    </option>
                                    <option style={{ backgroundColor: '#DC143C' }} value="#DC143C">
                                        Đỏ thắm
                                    </option>
                                    <option style={{ backgroundColor: '#00FFFF' }} value="#00FFFF">
                                        Xanh lơ
                                    </option>
                                    <option style={{ backgroundColor: '#50C878' }} value="#50C878">
                                        Lục bảo
                                    </option>
                                    <option style={{ backgroundColor: '#FFD700' }} value="#FFD700">
                                        Vàng kim loại
                                    </option>
                                    <option style={{ backgroundColor: '#4B0082' }} value="#4B0082">
                                        Chàm
                                    </option>
                                    <option style={{ backgroundColor: '#00A86B' }} value="#00A86B">
                                        Ngọc thạch
                                    </option>
                                    <option style={{ backgroundColor: '#C3B091' }} value="#C3B091">
                                        Kaki
                                    </option>
                                    <option style={{ backgroundColor: '#c8a2c8' }} value="#c8a2c8">
                                        Hoa cà
                                    </option>
                                    <option style={{ backgroundColor: '#808000' }} value="#808000">
                                        Ô liu
                                    </option>
                                    <option style={{ backgroundColor: '#FF7F00' }} value="#FF7F00">
                                        Da cam
                                    </option>
                                    <option style={{ backgroundColor: '#DA70D6' }} value="#DA70D6">
                                        Lan tím
                                    </option>
                                    <option style={{ backgroundColor: '#FFE5B4' }} value="#FFE5B4">
                                        Lòng đào
                                    </option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>Kích thước</th>
                            <td className={cx('product-table__select')}>
                                <select
                                    value={data.size}
                                    onChange={(e) => setData({ ...data, size: e.target.value })}
                                    name="size"
                                    id="size"
                                >
                                    <option value="Freesize">Freesize</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXL</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>Giới tính</th>
                            <td className={cx('product-table__select')}>
                                <select
                                    value={data.gioiTinh}
                                    onChange={(e) => setData({ ...data, gioiTinh: e.target.value })}
                                    name="gioiTinh"
                                    id="gioiTinh"
                                >
                                    <option value="nam">Nam</option>
                                    <option value="nu">Nữ</option>
                                    <option value="unisex">Unisex</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>Mô tả</th>
                            <td className={cx('product-table__description')}>
                                <textarea
                                    spellCheck={false}
                                    value={data.description}
                                    onChange={(e) => setData({ ...data, description: e.target.value })}
                                    name=""
                                    id=""
                                    cols="20"
                                    rows="5"
                                ></textarea>
                            </td>
                        </tr>

                        <tr>
                            <th>Xử lí</th>
                            <td className={cx('product-table__btn')}>
                                <Button variant='primary' onClick={handleAdd}>
                                    Thêm
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Helmet>
    );
}
export default AddProduct;
