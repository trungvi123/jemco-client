import { useState } from 'react';
import MessageModalContext from './MessageModalContext';

function MessageModalProvider({ children }) {
    const [modal, setModal] = useState({
        show:false,
        message:'',
        type:''
    });

    return <MessageModalContext.Provider value={{ modal, setModal }}>{children}</MessageModalContext.Provider>;
}

export default MessageModalProvider;
