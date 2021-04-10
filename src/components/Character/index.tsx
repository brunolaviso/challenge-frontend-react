import { FC } from 'react';
import css from './Character.module.scss';

interface ICharacter {
  id: number,
  name: string,
  description: string,
  thumbnail: string
}

const Character: FC<ICharacter> = ({
  name, description, thumbnail,
}) => (
  <div className={css.Character}>
    <img
      className={css.C__Img}
      src={thumbnail}
      alt=""
    />
    <div className={css.C__Info}>
      <h1 className={css.CI__Title}>{name}</h1>
      {description.length > 0
        ? <p className={css.CI__Description}>{description}</p>
        : <p className={css.CI__NoDescription}>Has no description.</p>}
    </div>
  </div>
);

export default Character;
