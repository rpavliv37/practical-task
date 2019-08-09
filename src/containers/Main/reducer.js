import * as actionTypes from './constants';

const updateAll = (all, isAllChecked) => {
  if (isAllChecked && !all.checked) {
    return { ...all, checked: true };
  } else if (!isAllChecked && all.checked) {
    return { ...all, checked: false };
  }
  return all;
};

const initialState = {
  filters: {
    all: {
      checked: true,
      label: 'Всe',
      value: 'all'
    },
    stops: [
      {
        label: 'Без пересадок',
        value: 0,
        checked: true
      },
      {
        label: '1 пересадка',
        value: 1,
        checked: true
      },
      {
        label: '2 пересадки',
        value: 2,
        checked: true
      },
      {
        label: '3 пересадки',
        value: 3,
        checked: true
      }
    ]
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SAVE_TICKETS:
      return {
        ...state,
        tickets: action.payload.data.tickets
      };
    case actionTypes.SAVE_EXCHANGE_RATE:
      return {
        ...state,
        exchange_rate: action.payload.data.rates
      };
    case actionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency
      };
    case actionTypes.CHANGE_STATUS_CHECKBOX: {
      const { all, stops } = state.filters;
      const newStops = stops.map(item =>
        item.value === action.payload.value
          ? { ...item, checked: action.payload.checked }
          : item
      );
      const isAllChecked = newStops.every(item => item.checked);

      return {
        ...state,
        filters: {
          ...state.filters,
          all: updateAll(all, isAllChecked),
          stops: newStops
        }
      };
    }
    case actionTypes.CHANGE_STATUS_FOR_ALL: {
      const { all, stops } = state.filters;
      const { checked } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          all: {
            ...all,
            checked
          },
          stops: stops.map(item => ({ ...item, checked }))
        }
      };
    }
    default:
      return state;
  }
};
