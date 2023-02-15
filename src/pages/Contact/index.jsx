/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

function Contact() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className="main">
            <Container>
                <Row className='justify-content-center'>
                    <Col className="m-4  col-12 col-lg-5 col-md-12 col-sm-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.886579682786!2d105.1781085152954!3d10.665910992396539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a230eede5600f%3A0xefeb11b26ebb3cd3!2zVHLGsOG7nW5nIFRIUFQgQ2jDonUgUGjDug!5e0!3m2!1svi!2s!4v1662477888765!5m2!1svi!2s"
                            width="100%"
                             height="1000"
                        ></iframe>
                    </Col>
                    <Col className="m-4 col-12 col-lg-5 col-md-12 col-sm-12">
                        <div className="mb-5">
                            <h5>THÔNG TIN LIÊN HỆ</h5>
                            <Row className="align-items-center mb-3">
                                <Col>
                                    <span>
                                        Hotline: <strong>0999 999 999</strong>
                                    </span>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <a className="text-white" href="tel:0396360603">
                                            Gọi ngay
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="align-items-center mb-3">
                                <Col>
                                    <span>
                                        Email: <strong>trungvibui123@gmail.com</strong>
                                    </span>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <a className="text-white" href="mailto:trungvibui123@gmail.com">
                                            Gửi ngay
                                        </a>
                                    </Button>
                                </Col>
                            </Row>

                            <Row className="align-items-center mb-3">
                                <Col>
                                    <span>
                                        Chat: <strong>Messenger</strong>
                                    </span>
                                </Col>
                                <Col>
                                    <Button variant="secondary">
                                        <a
                                            className="text-white"
                                            target={'_blank'}
                                            href="https://www.facebook.com/messages/t/105978018319276"
                                            rel="noreferrer"
                                        >
                                            Nhắn ngay
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <form>
                            <h5>GỬI MỘT LỜI NHẮN CHO TỤI MÌNH!</h5>

                            <Row>
                                <Col>
                                    <input
                                        style={{ outline: 'none' }}
                                        className="w-100 border-0 border-bottom mb-4"
                                        type="text"
                                        placeholder="Họ và tên"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input
                                        style={{ outline: 'none' }}
                                        className="w-100 border-0 border-bottom mb-4"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </Col>
                                <Col>
                                    <input
                                        style={{ outline: 'none' }}
                                        className="w-100 border-0 border-bottom mb-4"
                                        type="text"
                                        placeholder="Số điện thoại"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <textarea
                                    style={{ outline: 'none' }}
                                    className="w-100 m-2 pt-2"
                                    placeholder="Lời nhắn"
                                    rows="8"
                                ></textarea>
                            </Row>
                            <Row>
                                <Button variant="secondary" className="w-25 m-2" type="submit">
                                    Gửi đi
                                </Button>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
