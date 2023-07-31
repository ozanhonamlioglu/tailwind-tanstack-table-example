import { useQuery } from '@tanstack/react-query';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import NavBar from 'components/NavBar';
import Page, { PageBits } from 'components/Page';
import Capsules from 'modules/spaceX/capsules';
import { Capsule } from 'modules/spaceX/capsules/types';
import { ALL_CAPSULES } from 'types/endpoints';
import TanstackTable from 'components/TanstackTable';

const columnHelper = createColumnHelper<Capsule>();

const columns = [
  columnHelper.accessor('capsule_id', {
    cell: (info) => info.getValue(),
    header: () => <i>Capsule ID</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('capsule_serial', {
    cell: (info) => info.getValue(),
    header: () => <i>Capsule Serial</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    cell: (info) => info.getValue(),
    header: () => <i>Status</i>,
    footer: (info) => info.column.id,
  }),
];

const Home = () => {
  const { data } = useQuery([ALL_CAPSULES], Capsules.all, { initialData: [] });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Page drawer>
      <NavBar />
      <PageBits.Content>
        <TanstackTable.Table>
          <TanstackTable.Caption>
            Our products
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
          </TanstackTable.Caption>

          <TanstackTable.THead table={table} />
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
            </tr>
          </tbody>
        </TanstackTable.Table>
      </PageBits.Content>
    </Page>
  );
};

export default Home;
