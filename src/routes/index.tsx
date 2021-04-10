import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Team from '../pages/Team';
import CharacterComics from '../pages/CharacterComics';

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/team" exact component={Team} />
      <Route path="/characters/:name/comics" exact component={CharacterComics} />
    </Switch>
  </BrowserRouter>
);

export default Router;
