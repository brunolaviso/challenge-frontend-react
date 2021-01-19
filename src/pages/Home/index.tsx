import { FC, useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import css from './Home.module.scss';

interface IAPIResponse {
  data: {
   limit: number,
   count: number,
   offset: number,
   results: ICharacters[]
  }
}

interface ICharacters {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    extension: string,
    path: string
  }
}

const Home: FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);

  useEffect(() => {
    api.get<IAPIResponse>('characters').then((response) => {
      setCharacters(response.data.data.results);
    });
  }, []);

  console.log(characters);

  return (
    <>
      <Header />
      <Cover title="Explore the most powerful characters in Marvel">
        <Search />
      </Cover>
      <main className="container">
        <div className={css.Info}>
          <h2 className={css.I__Title}>Characters</h2>
          <small className={css.I__Results}># results</small>
        </div>
        <div className={css.Main}>
          {characters.map((character) => (
            <Card
              name={character.name}
              description={character.description}
              thumbnail={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
