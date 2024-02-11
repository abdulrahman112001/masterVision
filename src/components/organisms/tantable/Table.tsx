import { rankItem } from "@tanstack/match-sorter-utils";
import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import {
  FilterFn,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { t } from "i18next";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Header } from "../../atoms/Header";
import Excel from "../../molecules/Excell/Excell";
import Print from "../../molecules/Print/Print";
import { Loading } from "../Loading/Loading";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
  showGlobalFilter?: boolean;
  filterFn?: FilterFn<T>;
  isSuccess?: boolean;
  requestStatus?: boolean;
  setPagePagination: Dispatch<SetStateAction<number>>;
  isLoading?: boolean;
  isFetching?: boolean;
  typeCompensations?: Dispatch<SetStateAction<string>>;
  columnsToRemove: number[];
}

export const Table = <T extends object>({
  data,
  columns,
  isSuccess,
  isLoading,
  columnsToRemove,
  setPagePagination,
  isFetching,
}: ReactTableProps<T>) => {
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable(
    {
      data,
      columns,
      filterFns: {
        fuzzy: fuzzyFilter,
      },
      state: {
        globalFilter,
        sorting,
      },
      initialState: {
        pagination: {
          pageSize: 10,
        },
      },
      onSortingChange: setSorting,

      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      globalFilterFn: fuzzyFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),

      getPaginationRowModel: getPaginationRowModel(),
    },
    //@ts-ignore
    (hooks: { onPageChange: (({ rows }: { rows: any }) => void)[] }) => {
      hooks.onPageChange.push(({ rows }) => {
        setCurrentPageData(rows.map((row: { original: any }) => row.original));
      });
    }
  );

  useEffect(() => {
    setCurrentPageData(table.getRowModel().rows.map((row) => row.original));
  }, [table.getRowModel().rows]);
  useEffect(() => {}, [currentPageData]);
  const total = data.length;

  return (
    <>
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 sm:gap-y-4 md:gap-y-8 gap-y-8 mb-5">
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between my-[6px] ">
          <div className="flex flex-row  sm:justify-between gap-4 h-[69px] items-end">
            <div className="flex gap-2 items-center">
              <Excel data={currentPageData} />
              <Print columnsToRemove={columnsToRemove} />
            </div>

            <div className="col-span-1 flex justify-end items-center">
              <div className="flex flex-col gap-1 w-max">
                <select
                  className="!rounded-md mr-auto !shadow-none  border-style
                          false css-1h06qz8-control  dark:!bg-[#151521] dark:text-white dark:!border-dark-borderDark h-[39px] dark:!border-[2px] !w-[90px]"
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    const pageSize = Number(e.target.value);
                    table.setPageSize(pageSize);
                    setPagePagination(pageSize);
                  }}
                >
                  {[
                    { key: 10, value: 10 },
                    { key: 20, value: 20 },
                    { key: 30, value: 30 },
                    { key: 40, value: 40 },
                    { key: 50, value: 50 },
                    { key: 60, value: 60 },
                    { key: 100, value: 100 },
                    { key: 200, value: 200 },
                    { key: 1000, value: 1000 },
                    // { key: "الكل", value: totalItemsData },
                  ].map((pageSize) => (
                    <option
                      key={pageSize.key}
                      value={pageSize.value}
                      className=" h-[10px]"
                    >
                      {pageSize.key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="GlobalTable w-full flex flex-col gap-4 mt-8 overflow-x-scroll">
        {isLoading && <Loading />}
        {isFetching && <Loading />}

        <table id="print-table" className="min-w-full text-center">
          <thead className="border-b bg-red-500 dark:!bg-dark-tertiary">
            {table?.getHeaderGroups()?.map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-sm font-medium text-white dark:!bg-dark-tertiary"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span className="table-sort-arrow">
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </span>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {isSuccess && !!data.length && (
            <tbody className="">
              {table?.getRowModel()?.rows?.map((row) => (
                <tr key={row.id} className="border-b !bg-white">
                  {row?.getVisibleCells()?.map((cell) => (
                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 td-col-dark"
                      key={cell.id}
                      style={{
                        background: !!row.original.is_free_session
                          ? "#F4FFFA"
                          : "",
                      }}
                    >
                      {flexRender(
                        cell?.column?.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {isSuccess && !!!data?.length && !!!isLoading && !!!isFetching && (
          <div className="mb-5 pr-5">
            <Header
              header={t("nothing")}
              className="text-center text-2xl font-bold dark:text-white"
            />
          </div>
        )}
      </div>
    </>
  );
};
