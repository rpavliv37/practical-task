import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { handleError } from '../../api_helper';
import * as MainTypes from './constants';
import { saveTickets, saveExchangeRate } from './actions';
import axios from 'axios';

function getTicketsEpic($action) {
  return $action
    .ofType(MainTypes.GET_TICKETS)
    .map(action => action.payload)
    .switchMap(() => {
      return Observable.fromPromise(
        axios.get('ttp://localhost:8080/static/tickets.json')
      ).catch(handleError);
    })
    .do(result => result && result.data && saveTickets(result.data))
    .ignoreElements();
}

function getExchangeRateEpic($action) {
  return $action
    .ofType(MainTypes.GET_EXCHANGE_RATE)
    .map(action => action.payload)
    .switchMap(() => {
      return Observable.fromPromise(
        axios.get(
          'https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR,RUB'
        )
      ).catch(handleError);
    })
    .do(result => result && result.data && saveExchangeRate(result.data))
    .ignoreElements();
}

export default combineEpics(getTicketsEpic, getExchangeRateEpic);
