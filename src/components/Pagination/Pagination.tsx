import ReactPaginateImport from "react-paginate";
import type { ComponentType } from "react";
import css from "./Pagination.module.css";

const ReactPaginate =
  (ReactPaginateImport as unknown as { default: ComponentType<any> }).default ??
  (ReactPaginateImport as unknown as ComponentType<any>);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }: { selected: number }) =>
        onPageChange(selected + 1)
      }
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
