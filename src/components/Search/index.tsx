import { FC } from 'react';
import css from './Search.module.scss';

import search from '../../assets/search_24px.svg';

const Search: FC = () => (
  <div className={css.Form}>
    <input className={css.F__Textbox} type="text" />
    <button className={css.F__Btn} type="button"><img src={search} alt="Search" /></button>
  </div>
);

export default Search;
