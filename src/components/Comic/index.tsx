import { FC } from 'react';

// import spiderManComic from '../../assets/comics/spider-man.svg';
import dotCircle from '../../assets/dot-circle.svg';

import css from './Comic.module.scss';

interface IComics {
  title: string,
  description: string,
  pageCount: number,
  price: number
  thumbnail: {
    extension: string,
    path: string
  }
}

const Comic: FC<IComics> = ({
  title, description, pageCount, price, thumbnail: { path, extension },
}) => (
  <div className={css.Comic}>
    <img className={css.C__Img} src={`${path}/standard_fantastic.${extension}`} alt="" />
    <div className={css.C__Info}>
      <h2 className={css.CI__Title}>{title}</h2>
      <div className={css.CI__Details}>
        <p>01/01/1990</p>
        <img src={dotCircle} alt="" />
        <p>{`${pageCount} pages`}</p>
        <img src={dotCircle} alt="" />
        <p>{`US$ ${price}`}</p>
      </div>
      <div className={css.CI__Description}>
        {description
          ? <p>{description}</p>
          : <p className={css.CID__NoDescription}>Has no description.</p>}
      </div>
    </div>
  </div>
);
export default Comic;
