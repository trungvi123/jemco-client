import { useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductViewModal from '../../components/ProductViewModal';
import MessageModalContext from '../../store/MessageModalContext';
import MessageModal from '../../components/MessageModal';

function DefauLayout({ children }) {
    const MessageModalContextt = useContext(MessageModalContext)
    return (
        <>
            <MessageModal
                active={MessageModalContextt.modal.show}
                message={MessageModalContextt.modal.message}
                type={MessageModalContextt.modal.type}
            ></MessageModal>
            <Header></Header>
            {children}
            <Footer></Footer>
            <ProductViewModal></ProductViewModal>
        </>
    );
}

export default DefauLayout;
