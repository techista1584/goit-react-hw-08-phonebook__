import { DELETE_CONTACT } from './actions';

const initialState = {
  items: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};