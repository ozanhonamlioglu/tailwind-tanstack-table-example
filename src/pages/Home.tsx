import { useQuery } from '@tanstack/react-query';
import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
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
    header: () => <span>Capsule ID</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('capsule_serial', {
    cell: (info) => info.getValue(),
    header: () => <span>Capsule Serial</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    cell: (info) => info.getValue(),
    header: () => <span>Status</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('landings', {
    cell: (info) => info.getValue(),
    header: () => <span>Landings</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('details', {
    cell: (info) => info.getValue(),
    header: () => <span>Details</span>,
    footer: (info) => info.column.id,
  }),
];

const Home = () => {
  const { data } = useQuery([ALL_CAPSULES], Capsules.all, { initialData: [] });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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

          <TanstackTable.THead table={table} isSortable />
          <TanstackTable.TBody table={table} />
        </TanstackTable.Table>
      </PageBits.Content>
    </Page>
  );
};

export default Home;
