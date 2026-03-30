import {CHANGE_SERVICE_FIELD, EDIT_SERVICE} from "../actions/actionTypes.js";

const initialState = {
  currentId: '',
  name: '',
  price: '',
  editMode: false,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }

    case EDIT_SERVICE: {
      const { id, name, price } = action.payload;
      return {
        ...state,
        currentId: id,
        name,
        price,
        editMode: true,
      };
    }

      default:
        return state;
  }
}