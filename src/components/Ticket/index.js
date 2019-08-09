import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { Button } from 'reactstrap';
import { FaPlane } from 'react-icons/fa';
import Logo from './turkish-airlines.png';
import './index.scss';

moment.locale('ru');

const Ticket = ({
  price,
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  arrival_date,
  stops,
  departure_time,
  arrival_time,
  currency,
  currencySymbol
}) => (
  <div className="ticket-container">
    <div className="row">
      <div className="col-4">
        <div className="price-section">
          <img className="company-logo" src={Logo} alt="turkish-airlines" />
          <Button color="warning" size="lg" className="btn-order">
            Купить за {Math.round(price * currency)} {currencySymbol}
          </Button>
        </div>
      </div>
      <div className="col-8">
        <div className="details-section">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <span className="time">{arrival_time}</span>
            </div>
            <div className="col-auto">
              {stops > 0 && <div className="transfers">{stops} пересадки</div>}
              <div className="stops-container">
                <div className="divider div-transparent" />
                <span>
                  <FaPlane />
                </span>
              </div>
            </div>
            <div className="col-auto">
              <span className="time">{departure_time}</span>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <div className="city">
                {origin}, {origin_name}
              </div>
            </div>
            <div className="col-auto">
              <div className="city">
                {destination_name}, {destination}
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <div className="date">
                {moment(new Date(departure_date)).format('DD MMM YYYY, ddd')}
              </div>
            </div>
            <div className="col-auto">
              <div className="date">
                {moment(new Date(arrival_date)).format('DD MMM YYYY, ddd')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ticket;
