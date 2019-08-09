import React from 'react';
import { Button } from 'reactstrap';

const SimpleButton = ({ currency, value, handleOnClick }) => (
  <Button
    size="lg"
    outline
    color="primary"
    onClick={handleOnClick}
    className={currency === value ? "active" : ""}
  >
    {value}
  </Button>
);

export default SimpleButton;
