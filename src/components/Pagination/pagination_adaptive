import React, {useState, useEffect} from 'react';
import './pagination.css';

const Pagination = ({totalCount, getPage, getPerPage}) => {

    const [perPage, setPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const numberOfPages = [];
    let maxPage = Math.ceil(totalCount / perPage);

    const [pageLimit, setPageLimit] = useState(5);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(1);

    for (let i = 1; i <= maxPage; i++) {
        numberOfPages.push(i);
    }

    //При отрисовке компонента достаём данные из localStorage

    useEffect(() => {
        if (localStorage.getItem('perPage')) {
            setPerPage(localStorage.getItem('perPage'));
            getPerPage(localStorage.getItem('perPage'));
        }

        if (localStorage.getItem('page')) {
            setPage(localStorage.getItem('page'));
            getPage(localStorage.getItem('page'));
        }

        if (localStorage.getItem('MinPageLimit')) {
            setMinPageLimit(localStorage.getItem('MinPageLimit'));
        }

        if (localStorage.getItem('MaxPageLimit')) {
            setMaxPageLimit(localStorage.getItem('MaxPageLimit'));
        }
    }, [setPage, getPage, setPerPage, getPerPage]);

    //Смена количества контента на странице

    const changePerPage = (key) => {
        setPerPage(key);
        maxPage = Math.ceil(totalCount / key);
        //Если страница, на которой мы остановились до смены количества контента, больше максимальной страницы после смены
        if (page > maxPage) {
            setPage(maxPage);
            getPage(maxPage);
            localStorage.setItem('page', maxPage);
        } 
        //Если максимально возможная страница больше максимальной страницы
        if (maxPageLimit > maxPage) {
            setMaxPageLimit(maxPage);
            if(maxPage - pageLimit > 0) {
                setMinPageLimit(maxPage - pageLimit);
                localStorage.setItem('MinPageLimit', maxPage - pageLimit);
            } else {
                setMinPageLimit(1);
                localStorage.setItem('MinPageLimit', 1);
            }
            localStorage.setItem('MaxPageLimit', maxPage);
        } else {
            setMinPageLimit(1);
            localStorage.setItem('MinPageLimit', 1);
            setMaxPageLimit(5);
            localStorage.setItem('MaxPageLimit', 5);
        }
        localStorage.setItem('perPage', key);
    }

    //Функционал для стрелочек

    const toPreviousPage = () => {
        setPage(+page - 1);
        getPage(+page - 1);
        localStorage.setItem('page', +page - 1);
        //Перелистывание сжатых страничек
        if (+page - 1 <= minPageLimit) {
            setMinPageLimit(+page - 2);
            setMaxPageLimit(+page - 2 + pageLimit);
            localStorage.setItem('MinPageLimit', +page - 2);
            localStorage.setItem('MaxPageLimit', +page - 2 + pageLimit);
        }
    }

    const toNextPage = () => {
        setPage(+page + 1);
        getPage(+page + 1);
        localStorage.setItem('page', +page + 1);
        //Перелистывание сжатых страничек
        if (+page + 1 >= maxPageLimit) {
            setMaxPageLimit(+page + 1);
            setMinPageLimit(+page + 2 - pageLimit);
            localStorage.setItem('MaxPageLimit', +page + 1);
            localStorage.setItem('MinPageLimit', +page + 2 - pageLimit);
        }
    }

    //Функционал для пролистывания страниц

    const changePage = (number) => {
        setPage(number);
        getPage(number);
        localStorage.setItem('page', number);
    }

    //Вёрстка с номерами страниц

    const pageNumbers = numberOfPages.map(number => {
            let numberClassName = 'pagination__number';
            if (+page === number) {
                numberClassName += ' pagination__number_active';
            }
            if (number >= minPageLimit && number <= maxPageLimit) {
                return (
                    <li key={number} 
                        className={numberClassName}
                        onClick={() => {
                            changePage(number);
                        }
                    }>{number}
                    </li>
                )
            } else {
                return null;
            }
        });

    return (
        <>
            <div className="pagination__wrapper">
                <button type="button"
                    className={page > 1 ? 'pagination__btn btn_prev' : 'pagination__btn_unactive btn_prev'}
                    onClick={() => {
                        if (page > 1) {
                            toPreviousPage();
                        } 
                    }
                }></button>
                <ul className="pagination__items">
                    {pageNumbers}
                </ul>
                <button type="button"
                    className={page < maxPage ? 'pagination__btn btn_next' : 'pagination__btn_unactive btn_next'}
                    onClick={() => {
                        if (page < maxPage) {
                            toNextPage();
                        } 
                    }
                }></button>
            </div> 
            <div className="pagination__wrapper">
                <div className="pagination__show">Показывать по:</div>
                <ul className="pagination__items">
                    <li key="10" 
                        className={+perPage === 10 ? 'pagination__number pagination__number_active' : 'pagination__number'}
                        onClick={() => {
                            getPerPage(10);
                            changePerPage(10)
                        }
                    }>10</li>
                    <li key="50" 
                        className={+perPage === 50 ? 'pagination__number pagination__number_active' : 'pagination__number'}
                        onClick={() => {
                            getPerPage(50);
                            changePerPage(50)
                        }
                    }>50</li>
                    <li key="100" 
                        className={+perPage === 100 ? 'pagination__number pagination__number_active' : 'pagination__number'}
                        onClick={() => {
                            getPerPage(100);
                            changePerPage(100)
                        }
                    }>100</li>
                </ul>
            </div>
        </>
    )
}

export default Pagination;
