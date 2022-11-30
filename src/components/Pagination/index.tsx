import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onClickPage: (page:number) => void;
  allPages: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onClickPage,
  allPages,
}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(i) => onClickPage(i.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={allPages}
        // forcePage={currentPage - 2}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
