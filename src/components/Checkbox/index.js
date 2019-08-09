import React, { Fragment } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const SimplpeCheckbox = ({ label, value, checked, updateTickets }) => {
  return (
    <Fragment>
      <Checkbox
        checked={checked}
        onChange={updateTickets}
        value={value}
        color="primary"
        inputProps={{
          "aria-label": "secondary checkbox"
        }}
      />
      <span>{label}</span>
    </Fragment>
  );
};

export default SimplpeCheckbox;
