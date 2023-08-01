import { Table, flexRender } from '@tanstack/react-table';

interface IProps<T> {
  table: Table<T>;
}

const TBody = <T,>({ table }: IProps<T>): JSX.Element => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="px-6 py-4">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
