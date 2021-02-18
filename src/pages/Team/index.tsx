import { FC } from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import css from './Team.module.scss';

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

const Team: FC = () => {
  const history = useHistory();

  const handleNavigate = ({
    id, name, description, thumbnail,
  }: ICard) => {
    history.push(`/characters/${name}/comics`, {
      id, name, description, thumbnail: thumbnail.replace('landscape_xlarge', 'standard_fantastic'),
    });
  };

  return (
    <>
      <Header />
      <Cover title="Here is your own strike team choice" />
      <main className={`container ${css.Main}`}>
        <div className={css.M__Content}>
          { getFavorites().map((favorites) => (
            <button className={css.MC__btn} type="button" onClick={() => handleNavigate(favorites)}>
              <Card
                key={favorites.id}
                id={favorites.id}
                name={favorites.name}
                description={favorites.description}
                thumbnail={favorites.thumbnail}
              />
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Team;
