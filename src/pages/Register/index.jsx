import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import classnames from "classnames/bind";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MessageModalContext from '../../store/MessageModalContext';


import signUpApi from '../../api/signUpApi'
import style from "./Register.scss";
const cx = classnames.bind(style);

function Register() {
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const MessageModalContextt = useContext(MessageModalContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const submit = (data) => {
    if (data.password === data.password2) {
      setValid(true);
      const signUp = async ()=>{
        const res = await signUpApi.signUpUser(data);
        if(!res) {
          MessageModalContextt.setModal({
            show:true,
            message:'Server có thể không hoạt động, bạn có thể sử dụng các tài khoản mặc định trong file README.md',
            type:'error'
          })
        }
        if(res.state==='success'){
          MessageModalContextt.setModal({
            show:true,
            message:'Đăng ký tài khoản thành công',
            type:'success'
          })
          navigate('/login')
        }else{
          MessageModalContextt.setModal({
            show:true,
            message:'Email có thể đã được đăng ký, vui lòng kiểm tra lại',
            type:'error'
          })
        }
      }
      signUp()
    } else {
      setValid(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Container>
        <div className={cx("form-container")}>
          <h2 className="text-center">Welcome to Jemco Shop!</h2>

          <Form
            onSubmit={handleSubmit(submit)}
            className={cx("form-container__main")}
            method='POST'
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">Vui lòng nhập email</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Mật khẩu"
                {...register("password", { required: true })}
              />
              {errors.pass?.type === "required" && (
                <p className="text-danger">Vui lòng nhập mật khẩu</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Control
                type="password"
                name="password2"
                placeholder="Mật khẩu"
                {...register("password2", { required: true })}
              />
              {errors.pass2?.type === "required" && (
                <p className="text-danger">Vui lòng nhập lại mật khẩu</p>
              )}
              {!valid && <p className="text-danger">Mật khẩu không giống nhau</p>}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className={cx("register", "w-100")}
            >
              Đăng ký ngay
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Register;
