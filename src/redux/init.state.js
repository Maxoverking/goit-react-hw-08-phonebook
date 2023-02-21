import { authInitialState } from './AuthOperation/auth.slice';
import { initialStateContacts } from './Operation/contacts.slice';
import { filterInitialState } from './Operation/filter.slice';

export const initialState = {
  contacts: initialStateContacts,
  filter: filterInitialState,
  auth: authInitialState,
};
