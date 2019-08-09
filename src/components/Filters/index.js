import React from 'react';
import shortid from 'shortid';
import { ButtonGroup } from 'reactstrap';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './index.scss';
import 'typeface-roboto';
import { connect } from 'react-redux';
import _ from 'lodash';

const currencies = ['RUB', 'USD', 'EUR'];

const Filters = ({ setCurrency, currency, updateTickets, filters, updateAllTickets }) => {
  const handleСurrency = currency => {
    setCurrency(currency);
  };
  return (
    <div className="filters-container">
      <div className="row">
        <div className="col-auto">
          <p className="filters-header">Валюта</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <ButtonGroup>
            {currencies.map(currencyName => (
              <Button
                handleOnClick={() => handleСurrency(currencyName)}
                currency={currency}
                value={currencyName}
                key={shortid.generate()}
              />
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <p className="filters-header">Количество пересадок</p>
        </div>
      </div>
      <div className="row align-items-center justify-content-start">
        <div className="col-auto">
          <Checkbox {...filters.all} updateTickets={updateAllTickets} />
        </div>
      </div>
      {filters.stops.map(item => (
        <div
          className="row align-items-center justify-content-start"
          key={shortid.generate()}
        >
          <div className="col-auto">
            <Checkbox {...item} updateTickets={updateTickets} />
          </div>
        </div>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    filters: _.get(state, ['main', 'filters'])
  };
}

export default connect(
  mapStateToProps,
  {}
)(Filters);
