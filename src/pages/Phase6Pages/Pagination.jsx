import React, { useState, useEffect } from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage: initialPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageNumbers = 3; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(() => {
    // Retrieve the current page from localStorage, or default to 1
    return parseInt(localStorage.getItem("currentPage")) || 1;
  });
  const [inputPage, setInputPage] = useState(currentPage);

  useEffect(() => {
    // Save the current page to localStorage whenever it changes
    localStorage.setItem("currentPage", currentPage.toString());
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputPage(value);
  };

  const handleGoToInputPage = () => {
    const parsedInput = parseInt(inputPage, 10);
    if (!isNaN(parsedInput)) {
      goToPage(parsedInput);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    if (totalPages <= maxPageNumbers) {
      return pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ));
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (currentPage === totalPages) {
      // Adjust startPage and endPage when on the last page
      startPage = Math.max(1, totalPages - maxPageNumbers + 1);
      endPage = totalPages;
    }
    return pageNumbers
      .slice(Math.max(0, startPage - 1), endPage)
      .map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ));
  };

  return (
    <div className="pagination">
      <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      {/* {totalPages > 3 && currentPage >= 3 ? "..." : ""} */}
      {renderPageNumbers()}
      {/* {totalPages > 3 && currentPage != totalPages - 1 ? "..." : ""} */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          value={inputPage}
          onChange={handleInputChange}
          min="1"
          max={totalPages}
        />
        <button onClick={handleGoToInputPage}>Go to Page</button>
      </form>
    </div>
  );
};

export default Pagination;
