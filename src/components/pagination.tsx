import React from "react";
import _   from "lodash";

import "./pagination.css";

function PaginationPosts({
  itemsCount,
  pageSize,
  handlePageChange,
  currentPage,
}: {
  itemsCount: number;
  pageSize: number;
  handlePageChange: (page: number) => void;
  currentPage: number;
}) {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  return (
    <nav className="pagination-wrapper">
     
      
          <button
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="mypage-link-back"
          >
            Назад
          </button>
        
     

      <div className="page-block">
        {pages.map((page) => (
          <div
            key={"page_" + page}
            className={"mypage-item" + (currentPage === page ? "-active" : "")}
          >
            <button
              onClick={() => handlePageChange(page)}
              className="mypage-link"
            >
              {page}
            </button>
          </div>
        ))}
       
      </div>
     
        
          <button
            disabled={currentPage > 9}
            onClick={() => handlePageChange(currentPage + 1)}
            className="mypage-link-forward"
          >
            Далее
          </button>
       
      
    </nav>
  );
}

export default PaginationPosts;
