import { FC, memo, useState } from 'react';
import css from './Search.module.scss';

import search from '../../assets/search_24px.svg';

interface ISearch {
  handleSearchData: (data: string) => void
}

const Search: FC<ISearch> = ({ handleSearchData }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleSearchCharacter = () => {
    handleSearchData(inputText);
  };

  return (
    <div className={css.Form}>
      <input
        onChange={(e) => { setInputText(e.target.value); }}
        className={css.F__Textbox}
        type="text"
      />
      <button className={css.F__Btn} onClick={handleSearchCharacter} type="button">
        <img src={search} alt="Search" />
      </button>
    </div>
  );
};

export default memo(Search);
