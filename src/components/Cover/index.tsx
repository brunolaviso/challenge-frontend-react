import css from './Cover.module.scss';

import search from '../../assets/search_24px.svg';

const Cover:React.FC = () => (
  <div className={css.Cover}>
    <div className={`container ${css.C__Itens }`}>
      <h2 className={css.CI__Title}>Explore the most powerful characters in Marvel</h2>
      <div className={css.CI__Form}>
        <input className={css.CIF__Textbox} type="text" />
        <button className={css.CIF__Btn}><img src={search} alt="Search" /></button>
      </div>
    </div>
  </div>
)

export default Cover;
