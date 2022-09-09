import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Helmet from '../../components/Helmet';

function Admin() {
    return (
        <Helmet title="Admin">
            <div className="container main" style={{textAlign:'center'}}>
                <h1 >Xin chào Admin của Jemco vintage</h1>
                <Button variant='primary' className='w-100 mt-5'><Link className='text-white d-block'  to={'/admin/productManagement'}>Quản lí sản phẩm</Link></Button>
                <Button variant='primary' className='w-100 mt-5'><Link className='text-white d-block' to={'/admin/addProduct'}>Thêm sản phẩm</Link></Button>
                <h3 style={{marginTop:'30px'}}>Chúc bạn một ngày tốt lành!</h3>
            
            </div>
        </Helmet>
    );
}

export default Admin;
