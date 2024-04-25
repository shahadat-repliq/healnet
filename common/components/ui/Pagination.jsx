import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const range = (start, end) => {
        const result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    }
  return (
    <div>
    <div className="flex w-full mt-4">
      <ul className="flex space-x-2 items-center justify-center w-full">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-none md:p-2 bg-[#274539] size-8  md:size-12
             rounded-md  md:rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {"<"}
          </button>
        </li>
        {range(1, totalPages).map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-2 py-1 ${
                currentPage === page
                  ? 'text-primary-color bg-[#BCE8D7] border-[1px] border-[#88D6B8]  p-none md:p-2 size-8  md:size-12 rounded-md  md:rounded-lg'
                  : 'text-primary-color hover:bg-[#40E9A8]/10  p-none md:p-2 size-6  md:size-12 rounded-lg'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-none md:p-2 bg-[#274539] size-8  md:size-12
            rounded-md  md:rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {">"}
          </button>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Pagination