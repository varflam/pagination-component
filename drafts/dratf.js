
// export default class Pagination extends Component {
//     state = {
//         perPage: 10,
//         page: 1
//     }

//     render() {
//         const {page, perPage} = this.state;
//         const {totalCount, getPerPage, getPage} = this.props;
//         const numberOfPages = [];
//         const maxPage = Math.ceil(totalCount / perPage);

//         for (let i = 1; i <= maxPage; i++) {
//             numberOfPages.push(i);
//         }

//         console.log(page);

//         const changePerPage = (key) => {
//             this.setState({
//                 perPage: key
//             })
//             localStorage.setItem('perPage', key);
//         }
        
//         // useEffect(() => {
//         //     if (page > maxPage) {
//         //         setPage(maxPage);
//         //         getPage(maxPage);
//         //     } 
//         // }, [perPage, page, maxPage, getPage]);

//         const paginate = (number) => {
//             this.setState({
//                 page: number
//             })
//         }

//         const toPreviousPage = () => {
//             this.setState({
//                 page: --this.state.page
//             })
//         }

//         const toNextPage = () => {
//             this.setState({
//                 page: ++this.state.page
//             })
//         }

//         return(
//             <>
//             <div className="pagination__wrapper">
//                <a href="#" onClick={(e) => {
//                     e.preventDefault();
//                     if (page > 1) {
//                         toPreviousPage(page);
//                         getPage(page - 1);
//                     } 
//                 }
//             }>
//                 <img src={leftArrow} 
//                 alt="Previous Page"/>
//             </a>
//             <ul className="pagination">
//                 {numberOfPages.map(number => {
//                     return (
//                     <li key={number} 
//                     className="page-item">
//                         <a 
//                         href="#" 
//                         className="page-link"
//                         onClick={() => {
//                             getPage(number)
//                             paginate(number)}}>
//                                 {number}
//                         </a>
//                     </li>
//                     )
//                 })}
//             </ul>
//             <a href="#" onClick={(e) => {
//                 e.preventDefault();
//                 if (page < maxPage) {
//                     toNextPage(page);
//                     getPage(page + 1);
//                 } 
//             }}>
//                 <img src={rightArrow} 
//                 alt="Next Page"/>
//             </a>

//         </div> 
//         <div>Показывать по:</div>
//         <ul className="pagination">
//             <li key="10" 
//             className="page-item">
//                 <a href="#"
//                 className="page-link"
//                 onClick={() => {
//                     getPerPage(10);
//                     changePerPage(10)}}
//                 >
//                     10
//                 </a>
//             </li>
//             <li key="50" 
//             className="page-item">
//                 <a href="#"
//                 className="page-link"
//                 onClick={() => {
//                     getPerPage(50);
//                     changePerPage(50)}}
//                 >
//                     50
//                 </a>
//             </li>
//             <li key="100" 
//             className="page-item">
//                 <a href="#"
//                 className="page-link"
//                 onClick={() => {
//                     getPerPage(100);
//                     changePerPage(100)}}
//                 >
//                     100
//                 </a>
//             </li>
//         </ul>
//         </>
//         )

//     }
// }

/* <a href="!#" onClick={(e) => {
                e.preventDefault();
                if (page < maxPage) {
                    toNextPage();
                } 
            }}>
                <img src={rightArrow} 
                alt="Next Page"/>
            </a> */


            /* <a href="!#" onClick={(e) => {
                    e.preventDefault();
                    if (page > 1) {
                        toPreviousPage();
                    } 
                }
            }>
                <img src={leftArrow} 
                alt="Previous Page"/>
            </a> */