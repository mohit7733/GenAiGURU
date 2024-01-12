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
  const [inputPage, setInputPage] = useState(initialPage);

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

    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    return pageNumbers.slice(startPage - 1, endPage).map((page) => (
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
      {currentPage >= 3 ? (
        <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
          First
        </button>
      ) : (
        ""
      )}
      {currentPage != 1 ? (
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      ) : (
        ""
      )}
      {/* {totalPages > 3 && currentPage >= 3 ? "..." : ""} */}
      {renderPageNumbers()}
      {/* {totalPages > 3 && currentPage != totalPages - 1 ? "..." : ""} */}
      {currentPage != totalPages ? (
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      ) : (
        ""
      )}
      {totalPages > 3 && currentPage <= totalPages - 2 ? (
        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last Page
        </button>
      ) : (
        ""
      )}
      <div>
        <input
          type="number"
          value={inputPage}
          onChange={handleInputChange}
          min="1"
          max={totalPages}
        />
        <button onClick={handleGoToInputPage}>Go to Page</button>
      </div>
    </div>
  );
};

export default Pagination;
