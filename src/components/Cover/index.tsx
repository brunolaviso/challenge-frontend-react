import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Cover.module.scss';
import backIcon from '../../assets/arrow-left.svg';

type ICover = {
  title?: string,
  width?: string
}

const Cover: FC<ICover> = ({ title, children, width }) => {
  const isHome = useLocation().pathname === '/';
  return (
    <div className={css.Cover}>
      <div className={`container ${css.C__Itens}`} style={{ width }}>
        {!isHome
          && (
          <Link to="/">
            <img className={css.CI__BackIcon} src={backIcon} alt="" />
          </Link>
          )}
        <h2 className={css.CI__Title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Cover;
