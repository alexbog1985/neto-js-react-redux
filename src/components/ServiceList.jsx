import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {editService, removeService} from '../actions/actionCreators.js';

const ServiceList = () => {
  const services = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEditService = (id) => {
    dispatch(editService(id));
  };

  return (
    <ul>
      {services.map(service => (
        <li key={service.id}>
          {service.name} - {service.price}₽
          <button
            onClick={() => handleEditService(service.id)}
            aria-label="Edit"
          >
            edit
          </button>
          <button
            onClick={() => handleRemove(service.id)}
            aria-label={`Remove service ${service.name}`}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;