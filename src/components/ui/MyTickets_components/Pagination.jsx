import React from 'react';
import Button from './ActionButton';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = '',
  ...props
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // Adjust if we're near the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`} {...props}>
      {/* First Page */}
      {showFirstLast && currentPage > 1 && (
        <>
          <Button
            onClick={() => handlePageChange(1)}
            variant="outline"
            size="small"
            className="px-3 py-1"
          >
            First
          </Button>
          {visiblePages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}

      {/* Previous Page */}
      {showPrevNext && (
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="small"
          className="px-3 py-1"
        >
          Previous
        </Button>
      )}

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          variant={page === currentPage ? 'primary' : 'outline'}
          size="small"
          className="px-3 py-1 min-w-[40px]"
        >
          {page}
        </Button>
      ))}

      {/* Next Page */}
      {showPrevNext && (
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="small"
          className="px-3 py-1"
        >
          Next
        </Button>
      )}

      {/* Last Page */}
      {showFirstLast && currentPage < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <Button
            onClick={() => handlePageChange(totalPages)}
            variant="outline"
            size="small"
            className="px-3 py-1"
          >
            Last
          </Button>
        </>
      )}
    </div>
  );
};

export default Pagination;
