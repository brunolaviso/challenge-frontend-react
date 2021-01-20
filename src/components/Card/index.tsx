import { FC, memo } from 'react';

import team from '../../assets/team.svg';

import css from './Card.module.scss';

interface ICard {
  name: string,
  description: string,
  thumbnail: string
}

const Card: FC<ICard> = ({ name, description, thumbnail }) => (
  <section className={css.Card}>
    <div className={css.C__Wrappad}>
      <img className={css.CW__Img} src={thumbnail} alt="Thumbnail of character" />
    </div>
    <button className={css.C__Icon} type="submit">
      <img src={team} alt="Add in your team" />
    </button>
    <div className={css.C__Details}>
      <h3 className={css.CD__Title}>{name}</h3>
      <p className={css.CD__Description}>{description}</p>
    </div>
  </section>
);

export default memo(Card);
