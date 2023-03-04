import React from 'react';
import PropTypes from 'prop-types';

Dashboard.propTypes = {
  children: PropTypes.elementType.isRequired,
};

function Dashboard ({ children }) {
  return <div className="Dashboard">{children}</div>;
}

export default Dashboard;
