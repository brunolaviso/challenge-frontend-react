import { FC } from 'react';
import css from './Cover.module.scss';

type ICover = {
  title?: string,
  width?: string
}

const Cover: FC<ICover> = ({ title, children, width }) => (
  <div className={css.Cover}>
    <div className={`container ${css.C__Itens}`} style={{ width }}>
      <h2 className={css.CI__Title}>{title}</h2>
      {children}
    </div>
  </div>
);

export default Cover;
