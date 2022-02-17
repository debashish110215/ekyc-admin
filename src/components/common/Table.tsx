import { useMemo, FC } from "react";
import {
  useTable,
  useSortBy,
  UsePaginationOptions,
  UseSortByOptions,
} from "react-table";
import { BiSort } from "react-icons/bi";

interface TableProps {
  tableColumns: any[];
  tableData: any[];
  isSortedBy?: boolean;
  isPaginatedBy?: boolean;
}
const Table: FC<TableProps> = ({
  tableData,
  tableColumns,
  isSortedBy,
  isPaginatedBy,
}) => {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="w-full">
      <div className="bg-white rounded my-6 pb-4">
        <table {...getTableProps()} className="min-w-max w-full table-auto">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="text-gray-100 bg-sky-900 uppercase text-sm "
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-3 px-6 text-center "
                  >
                    {isSortedBy && <BiSort className="inline-block mr-1" />}
                    <span>{column.render("Header")}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="text-gray-600 text-sm font-light"
          >
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-100 text-center"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 px-6 text-center whitespace-nowrap  "
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {isPaginatedBy && (
          <div className="flex justify-end items-center my-6">
            <div className="flex text-gray-700">
              <div className="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-left w-4 h-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="flex h-8 text-sm rounded-full bg-gray-100">
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  1
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-sky-800 text-white ">
                  2
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  3
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  ...
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  13
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  14
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  15
                </div>
                <div className="h-6 w-6 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
                  2
                </div>
              </div>
              <div className="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-right w-4 h-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
