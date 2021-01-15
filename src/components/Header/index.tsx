import { FC } from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.scss';

import logo from '../../assets/logo.svg';
import users from '../../assets/users.svg';

const Header: FC = () => (
  <div className={css.Menu}>
    <div className={`container ${css.M__Itens}`}>
      <h1 className={css.Mi__Title}>
        <img className={css.Mit__Img} src={logo} alt="Iron man mask" />
        Marvel Strike Team
      </h1>
      <Link className={css.Link} to="/team">
        <button className={css.Mi__Btn} type="button">
          Your Team
          <img className={css.Mib__Img} src={users} alt="Users icon" />
        </button>
      </Link>
    </div>
  </div>
);

export default Header;
