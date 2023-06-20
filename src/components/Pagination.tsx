// Author - Mahalakshmi

import React from "react";
import { PaginationProps } from "../types/pagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlineDash } from "react-icons/ai";
import classnames from "classnames";
import { variants } from "../config";
import { sizes } from "../config/pagination";

const Pagination = ({
  cxActive,
  cxInactive,
  cxNav,
  size = "sm",
  currentPage = 1,
  totalPages,
  onPageChange,
  rounded = false,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showGap = totalPages > 0;
    const showLastPage = currentPage !== totalPages;

    pageNumbers.push(
      <button
        key="first"
        className={classnames(
          "mx-[0.15rem]",
          sizes[size],
          currentPage === 1
            ? cxActive
              ? cxActive
              : variants["primary"]
            : "bg-dark-neutral-200 text-white",
          rounded ? "rounded-full" : "rounded-md",
          "border-none",
          "cursor-pointer"
        )}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    const startNumber = currentPage > 2 ? currentPage - 1 : 2;
    const endNumber =
      startNumber + 2 < totalPages ? startNumber + 2 : totalPages - 1;

    if (showGap && currentPage > 3) {
      pageNumbers.push(
        <div key="start-gap" className="mx-1">
          <AiOutlineDash />
        </div>
      );
    }

    for (let i = startNumber; i <= endNumber; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={classnames(
            sizes[size],
            "mx-[0.1rem]",
            i === currentPage
              ? cxActive
                ? cxActive
                : variants["primary"]
              : cxInactive
              ? cxInactive
              : variants["darker"],
            rounded ? "rounded-full" : "rounded-md",
            "border-none",
            "cursor-pointer"
          )}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (showLastPage && currentPage < totalPages - 2) {
      pageNumbers.push(
        <div key="end-gap" className="mx-1">
          <AiOutlineDash />
        </div>
      );
    }

    pageNumbers.push(
      <button
        key="last"
        className={classnames(
          sizes[size],
          "mx-[0.15rem]",
          currentPage === totalPages
            ? cxActive
              ? cxActive
              : variants["primary"]
            : cxInactive
            ? cxInactive
            : variants["darker"],
          rounded ? "rounded-full" : "rounded-md",
          "border-none",
          "cursor-pointer"
        )}
        onClick={() => handlePageChange(totalPages)}
      >
        {totalPages}
      </button>
    );

    return pageNumbers;
  };

  return (
    <ul className="flex items-center text-xs list-none">
      <li>
        <button
          className={classnames(
            "flex justify-center items-center",
            sizes[size],
            "mx-[0.1rem]",
            "text-lg",
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "",
            cxNav ? cxNav : variants["dark"],
            rounded ? "rounded-full" : "rounded-md",
            "border-none",
            "cursor-pointer"
          )}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BiChevronLeft />
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          className={classnames(
            "flex justify-center items-center",
            sizes[size],
            "mx-[0.1rem]",
            "text-lg",
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "",
            cxNav ? cxNav : variants["dark"],
            rounded ? "rounded-full" : "rounded-md",
            "border-none",
            "cursor-pointer"
          )}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BiChevronRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
