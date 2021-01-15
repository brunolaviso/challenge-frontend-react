import { FC } from 'react';
import css from './Cover.module.scss';

const Cover: FC = () => (
  <div className={css.Cover}>
    <div className={`container ${css.C__Itens}`}>
      <h2 className={css.CI__Title}>Explore the most powerful characters in Marvel</h2>
    </div>
  </div>
);

export default Cover;
