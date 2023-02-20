import { authInitialState } from './AuthOperation/auth.slice';
import { initialStateContacts } from './contacts.slice';
import { filterInitialState } from './filter.slice';

export const initialState = {
  contacts: initialStateContacts,
  filter: filterInitialState,
  auth: authInitialState,
};
