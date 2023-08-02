import { createContext } from 'react';
import { t_table } from './types';
import { createTable } from '@tanstack/react-table';

export const TableContext = createContext<{
  table?: t_table<any>;
}>({
  table: undefined,
});
