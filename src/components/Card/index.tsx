import React, { FC, memo, useState } from 'react';

import team from '../../assets/team.svg';
import teamFavorited from '../../assets/team-favorited.svg';

import css from './Card.module.scss';

interface ICard {
  id: number
  name: string,
  description: string,
  thumbnail: string
}

const getFavorites = (): ICard[] => {
  const storageFavorites = localStorage.getItem('@MarvelApp:favorites');
  if (storageFavorites) {
    return JSON.parse(storageFavorites);
  }
  return [];
};

const isFavorited = (id: number): boolean => {
  const favorited = getFavorites().find((favorite) => favorite.id === id);
  if (favorited) return true;
  return false;
};

const Card: FC<ICard> = ({
  id, name, description, thumbnail,
}) => {
  const [favorited, setFavorited] = useState<boolean>(isFavorited(id));

  const handleFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    const storageFavorites = getFavorites();
    const currentFavorite = storageFavorites.find((favorite) => favorite.id === id);
    if (currentFavorite) {
      const filteredFavorites = storageFavorites.filter(
        (favorite) => favorite.id !== currentFavorite.id,
      );
      localStorage.setItem('@MarvelApp:favorites', JSON.stringify(filteredFavorites));
      setFavorited(false);
    } else {
      const newFavorites = [...storageFavorites, {
        id, name, description, thumbnail,
      }];
      localStorage.setItem('@MarvelApp:favorites', JSON.stringify(newFavorites));
      setFavorited(true);
    }
  };

  return (
    <section className={css.Card}>
      <div className={css.C__Wrappad}>
        <img className={css.CW__Img} src={thumbnail} alt="Thumbnail of character" />
      </div>
      <button className={`${css.C__Icon} ${favorited ? css['C__Icon--favorited'] : ''}`} type="button" onClick={handleFavorite}>
        <img src={favorited ? teamFavorited : team} alt="Add in your team" />
      </button>
      <div className={css.C__Details}>
        <h3 className={css.CD__Title} title={name}>{name}</h3>
        {description.length > 0
          ? (
            <p className={css.CD__Description} title={description}>
              { description.length > 130
                ? (
                  <>
                    {description.substring(0, 130).concat('... ')}
                    <a href="google.com">read more</a>
                  </>
                )
                : (
                  description
                )}
            </p>
          )
          : <p className={css.CD__NoDescription}>Has no description.</p>}
      </div>
    </section>
  );
};

export default memo(Card);
