import { FC } from 'react';

import spiderManComic from '../../assets/comics/spider-man.svg';
import dotCircle from '../../assets/dot-circle.svg';

import css from './Comic.module.scss';

const Comic: FC = () => (
  <div className={css.Comic}>
    <img className={css.C__Img} src={spiderManComic} alt="" />
    <div className={css.C__Info}>
      <h2 className={css.CI__Title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illum fugiat quasi velit ipsum illo placeat perspiciatis fugit delectus fuga, doloribus.
      </h2>
      <div className={css.CI__Details}>
        <p>01/01/1990</p>
        <img src={dotCircle} alt="" />
        <p>47 pages</p>
        <img src={dotCircle} alt="" />
        <p>U$0.90</p>
      </div>
      <div className={css.CI__Description}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis veniam nihil, commodi assumenda quibusdam,
          eaque ut ad debitis quidem officia beatae facilis quas,
          dignissimos ex repellat dolor obcaecati adipisci dicta?

        </p>
      </div>
    </div>
  </div>
);

export default Comic;
