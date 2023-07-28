import { DrawerAction, DrawerState } from './types';

export const initialState: DrawerState = { open: false };

export const reducer = (state: DrawerState, action: DrawerAction): DrawerState => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, open: !state.open };

    default:
      return state;
  }
};
