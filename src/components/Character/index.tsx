import { FC } from 'react';

import spiderMan from '../../assets/characters/spider.png';

import css from './Character.module.scss';

const Character: FC = () => (
  <div className={css.Character}>
    <img className={css.C__Img} src={spiderMan} alt="" />
    <div className={css.C__Info}>
      <h1 className={css.CI__Title}>Spider-Man</h1>
      <p className={css.CI__Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Hic illum facere debitis obcaecati assumenda quaerat dolores, itaque facilis
        voluptatum iste delectus, ut quia nesciunt recusandae voluptatem laborum inventore.
      </p>
    </div>
  </div>
);

export default Character;
