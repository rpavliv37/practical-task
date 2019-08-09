import * as actionTypes from './constants';

export const getTickets = () => ({
  type: actionTypes.GET_TICKETS,
  payload: {}
});

export const saveTickets = (data) => ({
  type: actionTypes.SAVE_TICKETS,
  payload: {
    data
  }
});

export const getExchangeRate = () => ({
  type: actionTypes.GET_EXCHANGE_RATE,
  payload: {}
});

export const saveExchangeRate = (data) => ({
  type: actionTypes.SAVE_EXCHANGE_RATE,
  payload: {
    data
  }
});

export const setCurrency = (currency) => ({
  type: actionTypes.SET_CURRENCY,
  payload: {
    currency
  }
});

export const changeStatusCheckbox = (value, checked) => ({
  type: actionTypes.CHANGE_STATUS_CHECKBOX,
  payload: {
    value,
    checked
  }
});

export const changeStatusForAll = (value, checked) => ({
  type: actionTypes.CHANGE_STATUS_FOR_ALL,
  payload: {
    value,
    checked
  }
});