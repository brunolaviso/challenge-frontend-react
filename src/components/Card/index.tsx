import { FC } from 'react';

import spiderMan from '../../assets/characters/spider-man.svg';
import team from '../../assets/team.svg';

import css from './Card.module.scss';

const Card: FC = () => (
  <div className={css.Card}>
    <img src={spiderMan} alt="Spider Man" />
    <button className={css.C__Icon} type="button">
      <img src={team} alt="Add in your team" />
    </button>
    <div className={css.C__Details}>
      <h3 className={css.CD__Title}>Spider Man</h3>
      <p className={css.CD__Description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, corporis
        facilis. Sit esse vero explicabo.
      </p>
    </div>
  </div>
);

export default Card;
