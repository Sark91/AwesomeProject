import React from 'react';
import { Route } from 'react-router';

import Home from 'AwesomeProject/react/routes/Home';
import Game from 'AwesomeProject/react/routes/Game';
import Error404 from 'AwesomeProject/react/routes/Error404';

export default (store) => {

  return (
    <Route>
      <Route path="/" component={Home} />
      <Route path="/game" component={Game}>

      </Route>
      <Route path="*" component={Error404} />
    </Route>
  );
}