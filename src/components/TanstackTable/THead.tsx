import { Table, flexRender } from '@tanstack/react-table';

interface IProps<T> {
  table: Table<T>;
}

const THead = <T,>({ table }: IProps<T>) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {table.getHeaderGroups().map((x) => {
          return x.headers.map((header) => {
            return (
              <th key={header.id} scope="col" className="px-6 py-3">
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            );
          });
        })}
      </tr>
    </thead>
  );
};

const HeadRow = () => {
  return <th>asd</th>;
};

export default THead;
