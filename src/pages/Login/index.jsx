import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import classnames from 'classnames/bind';

// import signInApi from '../../api/signInApi'; them vao khi co sever
import style from './Login.scss';
import MessageModalContext from '../../store/MessageModalContext';
import fakeAccount from '../../assets/fake-data/fakeAccount';
const cx = classnames.bind(style);

function Login() {
    const param = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const MessageModalContextt = useContext(MessageModalContext);

    const handleSignIn = async () => {
        if (param.admin) {
            try {
                let check = {
                    state: '',
                };
                const admin = fakeAccount.admin;

                if (admin.email === email && admin.password === password) {
                    check = {
                        state: 'success',
                        user: {
                            email:admin.email,
                            isAdmin:true
                        }
                    };
                } else {
                    check.state = 'failure';
                }
                // xoa khi xài server

                // const check = await signInApi.signInAdmin({
                //     email,
                //     password,
                // }); git pull server để dùng, để dễ dàng ta dùng fakeAccount

                if (check.state === 'success') {
                    localStorage.setItem('user', JSON.stringify(check.user));
                    localStorage.setItem('login', JSON.stringify({ login: true }));
                    navigate('/');
                } else {
                    MessageModalContextt.setModal({
                        show: true,
                        message: 'Tên đăng nhập hoặc mật khẩu không chính xác',
                        type: 'danger',
                    });
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                let check = {
                    state: '',
                };
                const user = fakeAccount.user;
                if (user.email === email && user.password === password) {
                    check = {
                        state: 'success',
                        user: {
                            email:user.email
                        }
                    };
                } else {
                    check.state = 'failure';
                }
                // xoa khi xài server

                // const check = await signInApi.signInUser({
                //     email,
                //     password,
                // });git pull server để dùng, để dễ dàng ta dùng fakeAccount

                if (check.state === 'success') {
                    localStorage.setItem('user', JSON.stringify(check.user));
                    localStorage.setItem('login', JSON.stringify({ login: true }));
                    navigate('/');
                } else {
                    MessageModalContextt.setModal({
                        show: true,
                        message: 'Tên đăng nhập hoặc mật khẩu không chính xác',
                        type: 'danger',
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Container>
                <div className={cx('form-container')}>
                    <h2 className="text-center">Welcome to Jemco Shop!</h2>

                    <Form className={cx('form-container__main')} method={'POST'}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Mật khẩu"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Nhớ tên tài khoản" />
                        </Form.Group>
                        <Button variant="primary" className="w-100" onClick={handleSignIn}>
                            Đăng nhập
                        </Button>
                        {!param.admin && (
                            <>
                                <p className="text-center mt-2">Hoặc</p>
                                <Button variant="primary" className={cx('register', 'w-100', 'mt-1')}>
                                    <Link className="text-white" to={'/register'}>
                                        Đăng ký ngay
                                    </Link>
                                </Button>
                            </>
                        )}
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Login;
