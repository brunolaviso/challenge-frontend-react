import { FC } from 'react';

import css from './Footer.module.scss';

const Footer: FC = () => (
  <div className={css.Footer}>
    <div className={`container ${css.F__Itens}`}>
      <p>Data provided by Marvel. © 2021 MARVEL</p>
      <p>Developed by Bruno Laviso</p>
    </div>
  </div>
);

export default Footer;
