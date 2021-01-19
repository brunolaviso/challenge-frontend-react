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
    count: number,
    limit: number,
    offset: number,
    results: ICharacters[],
    total: number
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
  const [limit, setLimit] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    api.get<IAPIResponse>(`characters?limit=${limit}`).then((response) => {
      setCharacters(response.data.data.results);
      setTotal(response.data.data.total);
    });
  }, [limit]);

  function handleNextPage() {
    setLimit(limit + 20);
  }

  return (
    <>
      <Header />
      <Cover title="Explore the most powerful characters in Marvel">
        <Search />
      </Cover>
      <main className="container">
        <div className={css.Info}>
          <h2 className={css.I__Title}>Characters</h2>
          <small className={css.I__Results}>{`${total} results`}</small>
        </div>
        <div className={css.Main}>
          {characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              description={character.description}
              thumbnail={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
            />
          ))}
        </div>
        <button onClick={handleNextPage} type="button">Carregar mais</button>
      </main>
      <Footer />
    </>
  );
};

export default Home;
