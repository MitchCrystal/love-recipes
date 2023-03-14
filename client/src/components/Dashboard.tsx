import React from 'react';
import { PropsWithChildren } from 'react'

function Dashboard ({ children }:PropsWithChildren) {
  return <div className="Dashboard">{children}</div>;
}

export default Dashboard;
