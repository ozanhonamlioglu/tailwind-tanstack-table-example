import { flexRender } from '@tanstack/react-table';
import useTable from './useTable';

const TBody = () => {
  const table = useTable();

  if (!table) return null;
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
