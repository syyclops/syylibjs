type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  size?: "xs" | "sm" | "md" | "lg";
  cxActive?: string;
  cxInactive?: string;
  cxNav?: string;
  rounded?: boolean;
};

export { PaginationProps };
