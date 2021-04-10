import { FC } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import Router from './routes';

const App: FC = () => (
  <SkeletonTheme color="#cacaca" highlightColor="#e0e0e0">
    <Router />
  </SkeletonTheme>
);

export default App;
