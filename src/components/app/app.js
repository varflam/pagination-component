import React, {useState} from 'react';
import Pagination from '../Pagination/pagination';

import './app.css';

const App = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const getPage = (page) => {
        setPage(page);
    }

    const getPerPage = (perPage) => {
        setPerPage(perPage);
    }

    return(
        <Pagination totalCount={100} getPage={getPage} getPerPage={getPerPage}/>
    )
}

export default App;

