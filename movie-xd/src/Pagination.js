import React from 'react';

const Pagination = ({ currentPage, totalResults, onPageChange, itemsPerPage = 10 }) => {
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  
  if (totalPages <= 1) return null;
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  
  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        1
      </button>
    );
    
    // Show ellipsis if current page is far from first page
    if (currentPage > 3) {
      pages.push(<span key="start-ellipsis" className="px-2">...</span>);
    }
    
    // Show pages around current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {i}
        </button>
      );
    }
    
    // Show ellipsis if current page is far from last page
    if (currentPage < totalPages - 2) {
      pages.push(<span key="end-ellipsis" className="px-2">...</span>);
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };
  
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        Previous
      </button>
      
      {renderPageNumbers()}
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;