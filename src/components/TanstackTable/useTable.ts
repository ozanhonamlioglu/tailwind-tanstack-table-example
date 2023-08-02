import { useContext } from 'react';
import { TableContext } from './Context';

const useTable = () => {
  const { table } = useContext(TableContext);

  return table;
};

export default useTable;
