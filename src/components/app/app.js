import React, {useState} from 'react';
import Pagination from '../Pagination/pagination';

import './app.css';

const App = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
//Функции для отправки данных другому компоненту
    const getPage = (page) => {
        setPage(page);
    }

    const getPerPage = (perPage) => {
        setPerPage(perPage);
    }
//В totalCount записываем длину приходящего массива с данными, которые будем отображать
    return(
        <Pagination totalCount={100} getPage={getPage} getPerPage={getPerPage}/>
    )
}

export default App;

