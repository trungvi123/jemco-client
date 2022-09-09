import classNames from 'classnames/bind';
import { useContext, useRef } from 'react';
import {BiCheckCircle,BiErrorCircle,BiX} from 'react-icons/bi'
import MessageModalContext from '../../store/MessageModalContext';


import style from './MessageModal.scss';

const cx = classNames.bind(style);

function MessageModal({ message ='',active = false , type = 'success'}) {
    const modal = useRef(null);
    
    const MessageModalContextt = useContext(MessageModalContext);
    
    const closeModal = () => {
        MessageModalContextt.setModal({
            show:false
        })
    }

    const emtyFun = (e) => {
        e.stopPropagation();
    };

    return (
        <div ref={modal} onClick={closeModal} className={cx('messageModal',{active})}>
            <div onClick={(e)=>emtyFun(e)} className={cx('messageModal__content',{success:type === 'success',error:type === 'error'})}>
                <div className={cx('messageModal__content__title')}>
                    {type === 'success' && <BiCheckCircle className={cx('messageModal__content__title__icon')}></BiCheckCircle>}
                    {type === 'error' && <BiErrorCircle className={cx('messageModal__content__title__icon')}></BiErrorCircle>}
                    
                    <h3>Thông báo</h3>
                </div>
                <div className={cx('messageModal__content__message')}>
                    <p>{message}</p>
                </div>
                <div
                    className={cx('messageModal__content__close')}
                    onClick={closeModal}
                >
                    <BiX></BiX>
                </div>
            </div>
        </div>
    );
}

export default MessageModal;
