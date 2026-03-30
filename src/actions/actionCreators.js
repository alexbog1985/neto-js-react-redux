import {ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, SET_EDIT_MODE} from "./actionTypes.js";

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

export const editService = (id, name, price) => ({
  type: EDIT_SERVICE,
  payload: { id, name, price },
})

export const setEditModeService = (id, name, price) => ({
  type: SET_EDIT_MODE,
  payload: { id, name, price },
})