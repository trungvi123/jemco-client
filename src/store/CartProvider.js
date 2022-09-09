import { useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalProduct = () => {
        if (JSON.parse(localStorage.getItem('CartItem')) !== null) {
            let cartItem = JSON.parse(localStorage.getItem('CartItem'));

            let sum = cartItem.reduce((bienLuuTru, giaTriCongThem) => bienLuuTru + Number(giaTriCongThem.quantity), 0);
            setTotalProduct(sum); // lap qua va cong tong so luong san pham
        }
    };

    const updateTotalPrice = () => {
        if (JSON.parse(localStorage.getItem('CartItem')) !== null) {
            let cartItem = JSON.parse(localStorage.getItem('CartItem'));

            let sum = cartItem.reduce(
                (bienLuuTru, giaTriCongThem) =>
                    bienLuuTru + Number(giaTriCongThem.quantity) * Number(giaTriCongThem.price),
                0,
            );
            setTotalPrice(sum); // lap qua va cong tong so luong san pham
        }
    };

    return (
        <CartContext.Provider
            value={{ updateTotalProduct, updateTotalPrice, totalProduct, setTotalProduct, totalPrice, setTotalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
