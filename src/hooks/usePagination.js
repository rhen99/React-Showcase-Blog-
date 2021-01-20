import {useState} from 'react'

export default function usePagination(perPage) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(typeof perPage === 'number' ? perPage: 10);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    return [paginate, nextPage, prevPage, currentPage, indexOfFirstPost, indexOfLastPost, postPerPage];
}
