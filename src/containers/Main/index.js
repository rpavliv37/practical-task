import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';
import Ticket from '../../components/Ticket';
import Filters from '../../components/Filters';
import {
  getTickets,
  getExchangeRate,
  setCurrency,
  changeStatusCheckbox,
  changeStatusForAll
} from './actions';
import parseFilters from './utils/parseFilters';
import filterTickets from './utils/filterTickets';

const currencySymbols = {
  RUB: '₽',
  EUR: '€',
  USD: '$'
};

class Main extends Component {

  componentDidMount() {
    const {
      getTickets: _getTickets,
      getExchangeRate: _getExchangeRate,
      setCurrency: _setCurrency
    } = this.props;
    _getTickets();
    _getExchangeRate();
    _setCurrency('RUB');
  }

  updateTickets = e => {
    const { changeStatusCheckbox: _changeStatusCheckbox } = this.props;
    _changeStatusCheckbox(parseInt(e.target.value), e.target.checked);
  };

  updateAllTickets= e => {
    const { changeStatusForAll: _changeStatusForAll } = this.props;
    _changeStatusForAll(e.target.value, e.target.checked);
  };

  render() {
    const {
      setCurrency: _setCurrency,
      currency,
      exchange_rate,
      tickets,
      filters
    } = this.props;

    const parsedFilters = filters && parseFilters(filters);
    const filteredFilters = tickets && filterTickets(tickets, parsedFilters);
    const sortedTickets = _.sortBy(filteredFilters, [t => t.price]);

    const currencyRate = exchange_rate && currency ? exchange_rate[currency] : 1;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters
              setCurrency={_setCurrency}
              currency={currency}
              updateTickets={this.updateTickets}
              updateAllTickets={this.updateAllTickets}
            />
          </div>
          <div className="col-9">
            {sortedTickets.map(ticket => (
              <Ticket
                key={shortid.generate()}
                {...ticket}
                currency={currencyRate}
                currencySymbol={currencySymbols[currency]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: _.get(state, ['main', 'tickets']),
    filters: _.get(state, ['main', 'filters']),
    currency: _.get(state, ['main', 'currency']),
    exchange_rate: _.get(state, ['main', 'exchange_rate'])
  };
}

export default connect(
  mapStateToProps,
  {
    getTickets,
    getExchangeRate,
    setCurrency,
    changeStatusCheckbox,
    changeStatusForAll
  }
)(Main);
