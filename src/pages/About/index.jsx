import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { ab4, ab2, ab1 } from '../../assets/images/service_img';

import './About.scss'


function About() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className="main">
            <Container className='pt-5'>
                <Row>
                    <Col className="text-center">
                        <h4>VỀ CHÚNG TÔI</h4>
                        <span
                            style={{
                                fontSize: '3rem',
                                fontWeight: '200',
                                position: 'relative',
                            }}
                        >
                            Jemco
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    fontSize: '1.5rem',
                                }}
                            >
                                ®
                            </span>
                        </span>

                        <p>
                            Chúng tôi là cửa hàng thời trang Streetwear nổi tiếng với định hướng cung cấp sản phẩm có
                            chất lượng cao, sành điệu với giá thành hợp lý.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col>
                        <img className="w-100" src={ab4} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} lg={6}  className=" p-lg-5 text-center">
                        <p className='p-lg-2'
                            style={{
                                fontSize: '2.3rem',
                                fontWeight: '200',
                                position: 'relative',
                            }}
                        >
                            Chúng tôi là ai?
                        </p>
                    </Col>
                    <Col xs={7} lg={6} className="p-lg-5 text-left">
                        <p >
                        

                            Jemco là lựa chọn hàng đầu dành cho các tín đồ thời trang Streetwear sành điệu. Sứ mệnh của
                            Jemco là trao quyền cho thế hệ trẻ toàn thế giới tự do thể hiện phong cách thông qua thời
                            trang, thương hiệu vượt qua ranh giới của thời trang streetwear bằng cách không ngừng sáng
                            tạo các trang phục với các bộ sưu tập độc đáo.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col>
                        <img className="w-100" src={ab2} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} lg={6} className="p-lg-5 text-center">
                        <p
                        className='p-lg-5'
                            style={{
                                fontSize: '2.3rem',
                                fontWeight: '200',
                                position: 'relative',
                            }}
                        >
                            Chất lượng trải nghiệm vượt trội
                        </p>
                    </Col>
                    <Col xs={7} lg={6} className=" p-lg-5 text-left">
                        <p>
                            Chúng tôi không ngừng nỗ lực, tập trung vào chất lượng sản phẩm và trải nghiệm mua sắm vượt
                            trội nhất chưa từng có trước đây, các cửa hàng vật lý của chúng tôi, tối ưu hóa trải nghiệm,
                            giúp người dùng mua sắm một sản phẩm cao cấp thật sự. 
                            
                        </p>
                        <p>
                            Mua sắm online dễ dàng, đa nền tảng
                            trải nghiệm tuyệt vời. Giá thành hợp lý. Điều này đã giải quyết bài toán để bạn vừa cân đối
                            khả năng tài chính, vừa đáp ứng hoàn hảo cho nhu cầu thời trang của bạn và xu hướng nhanh
                            của thời đại.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col>
                        <img className="w-100" src={ab1} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={6} className="p-lg-5 text-center">
                        <p
                            className='p-lg-5'
                            style={{
                                fontSize: '2.3rem',
                                fontWeight: '200',
                                position: 'relative',
                            }}
                        >
                            Biểu tượng thời trang thời đại mới Fashion icon for young generation
                        </p>
                    </Col>
                    <Col xs={6} lg={6} className="p-lg-5 text-left">
                        <p>
                            Tại Jemco, mỗi sản phẩm đều mang theo sự cá tính và sành điệu, đại diện cho hình ảnh giới
                            trẻ hiện đại - biểu tượng cho sự dẫn đầu phong cách thời đại mới.
                        </p>
                        <p>
                            Quần áo có thể sẽ lỗi thời nhưng phong cách thời trang thì không. Tầm nhìn độc đáo của
                            Jemco chính là để mỗi cá nhân tự do thể hiện phong cách khi khoác lên mình những sản phẩm
                            được tạo nên từ sự đam mê, mang giá trị của thế hệ mới, đầy trẻ trung, năng động và luôn
                            không ngừng khẳng định bản thân, hướng đến tương lai.
                        </p>
                        <p>
                            Sự đầu tư từ chất lượng đóng gói, bao bì sản phẩm đến mỗi thước phim, hình ảnh cho tới cách
                            làm chủ được nghệ thuật sắc màu và chỉn chu trong từng chi tiết đã đưa Jemco trở thành
                            một trong những thương hiệu thời trang Streetwear được giới trẻ yêu thích, tin dùng hàng đầu
                            tại Việt Nam.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
