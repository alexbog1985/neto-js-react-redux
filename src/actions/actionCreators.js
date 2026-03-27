import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD} from "./actionTypes.js";

export const addService = (name, price) => ({
  type: ADD_SERVICE,
  payload: { name, price },
});

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: { id },
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: { name, value },
});
