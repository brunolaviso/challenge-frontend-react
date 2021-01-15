import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Team from '../pages/Team';
import CharacterProfile from '../pages/CharacterProfile';

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/team" exact component={Team} />
      <Route path="/character" exact component={CharacterProfile} />
    </Switch>
  </BrowserRouter>
);

export default Router;
