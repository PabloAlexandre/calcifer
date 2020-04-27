import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

import Home from './Home';
import AddCost from './AddCost';

export default function Midas({ containerContext }) {
  const { path } = useRouteMatch();
  const { setBGColor } = useContext(containerContext);

  useEffect(() => {
    setBGColor('#fff');
  }, []);

  return (
    <Switch>
      <Route path={`${path}`} exact component={Home} />
      <Route path={`${path}/costs/add`} component={AddCost} />
    </Switch>
  );
}