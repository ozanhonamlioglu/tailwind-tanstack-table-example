import { Table, flexRender } from '@tanstack/react-table';
import useTable from './useTable';

interface IProps<T> {
  isSortable?: boolean;
}

const THead = <T,>({ isSortable }: IProps<T>) => {
  const table = useTable();

  if (!table) return null;
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {table.getHeaderGroups().map((x) => {
          return x.headers.map((header) => {
            return (
              <th key={header.id} scope="col" className="px-6 py-3">
                {header.isPlaceholder ? null : (
                  <div className="flex">
                    <div className="flex flex-1 cursor-pointer" onClick={isSortable ? header.column.getToggleSortingHandler() : undefined}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <i className="fa-solid fa-sort-up ml-1"></i>,
                        desc: <i className="fa-solid fa-sort-down ml-1"></i>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </div>
                )}
              </th>
            );
          });
        })}
      </tr>
    </thead>
  );
};

export default THead;
