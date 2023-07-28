import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import { DrawerAction, DrawerState } from './types';
import { initialState, reducer } from './reducer';
import Drawer from './Drawer';

export const DrawerContext = createContext<{
  state: DrawerState;
  dispatch: Dispatch<DrawerAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
      <Drawer />
    </DrawerContext.Provider>
  );
};

export default Provider;
