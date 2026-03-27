import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addService, changeServiceField} from "../actions/actionCreators.js";

const ServiceAdd = () => {
  const formData = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name.trim() && formData.price.trim()) {
      dispatch(addService(formData.name, formData.price));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Название услуги"
        required
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Цена"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  )
};

export default ServiceAdd;