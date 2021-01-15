import { FC } from 'react';
import css from './Cover.module.scss';

type ICover = {
  title?: string
}

const Cover: FC<ICover> = ({ title, children }) => (
  <div className={css.Cover}>
    <div className={`container ${css.C__Itens}`}>
      <h2 className={css.CI__Title}>{title}</h2>
      {children}
    </div>
  </div>
);

export default Cover;
