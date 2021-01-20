import "./Pagination.scss";
import {useState, useEffect} from 'react'

function Pagination({currentPage, postPerPage, totalPosts, paginate, nextPage, prevPage }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }
    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(false);
    useEffect(() => {
        if(currentPage === 1){
            setDisableNext(false);
            setDisablePrev(true);
        }else if(currentPage === Math.ceil(totalPosts / postPerPage)){
            setDisablePrev(false);
            setDisableNext(true);
        }else{
            setDisablePrev(false);
            setDisableNext(false);
        }
    }, [currentPage, postPerPage, totalPosts])


    return (
        <nav className="pagination">
            <ul className="pagination-list">
                <li className="pagination-item">
                    {
                        disablePrev ? (
                            <span className="pagination-link disabled">&laquo;</span>
                        ) : (
                            <a onClick={() => prevPage()} href="#!" className="pagination-link">&laquo;</a>
                        )
                    }
                </li>
                {pageNumbers.map(number => (
                    <li className="pagination-item" key={number}>
                        <a href="#!" onClick={() => paginate(number)} className={number === currentPage ? "pagination-link active": "pagination-link"}>{number}</a>
                    </li>
                ))}
                <li className="pagination-item">
                    {disableNext ? (<span className="pagination-link disabled">&raquo;</span>) : (<a onClick={() => nextPage()} href="#!"  className="pagination-link">&raquo;</a>)}
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
