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
        axios.get('http://localhost:8080/static/tickets.json')
      ).catch(handleError);
    })
    .map(result =>
      result && result.data ? saveTickets(result.data) : { type: "a" }
    );
}

function getExchangeRateEpic($action) {
  return $action
    .ofType(MainTypes.GET_EXCHANGE_RATE)
    .map(action => action.payload)
    .switchMap(() => {
      return Observable.fromPromise(
        axios.get('https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR,RUB')
      ).catch(handleError);
    })
    .map(result =>
      result && result.data ? saveExchangeRate(result.data) : { type: "a" }
    );
}

export default combineEpics(getTicketsEpic, getExchangeRateEpic);
