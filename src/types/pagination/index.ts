type PaginationProps = {
  cxActive?: string;
  cxInactive?: string;
  cxNav?: string;
  size?: "xs" | "sm" | "md" | "lg";
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  rounded?: boolean;
};

export { PaginationProps };
