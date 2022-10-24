import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

const Pagination = ({currentPage, onClickPage}) => {
    console.log(currentPage);
  return (
    <div>
          <ReactPaginate
      className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(i)=>onClickPage(i.selected+1)}
        pageRangeDisplayed={3}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
      /></div>
  )
}

export default Pagination