import { useState } from 'react';
import SearchModalContext from './SearchModalContext';

function SearchModalProvider({ children }) {
    const [show, setShow] = useState(false); // bật tắt modal search

    const [searchData, setSearchData] = useState([]);

    return (
        <SearchModalContext.Provider value={{ show, setShow, searchData, setSearchData }}>
            {children}
        </SearchModalContext.Provider>
    );
}

export default SearchModalProvider;
