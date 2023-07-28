import { useContext } from 'react';
import { DrawerContext } from './Provider';

const useDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  const toggle = () => dispatch({ type: 'TOGGLE' });

  return { state, toggle };
};

export default useDrawer;
