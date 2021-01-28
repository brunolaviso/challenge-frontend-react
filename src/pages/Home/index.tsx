import {
  FC, useCallback, useEffect, useState,
} from 'react';
import Skeleton from 'react-loading-skeleton';
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
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [limit, setLimit] = useState<number>(24);
  const [total, setTotal] = useState<number>(0);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    // setLoading(true);
    api.get<IAPIResponse>(`characters?limit=${limit}`).then((response) => {
      setCharacters(response.data.data.results);
      setTotal(response.data.data.total);
      setLoading(false);
    });
  }, [limit]);

  useEffect(() => {
    api.get<IAPIResponse>(`characters?name=${value}`).then((response) => {
      setCharacters(response.data.data.results);
    });
  }, [value]);

  const handleNextPage = () => {
    setLimit(limit + 24);
  };

  const handleSearchData = useCallback((data: string) => {
    setValue(data);
  }, []);

  return (
    <>
      <Header />
      <Cover title="Explore the most powerful characters in Marvel">
        <Search handleSearchData={handleSearchData} />
      </Cover>

      <main className={`container ${css.Main}`}>
        {loading
          ? (
            <div className={css.M__Info}>
              <h2 className={css.MI__Title}>
                <Skeleton width={220} height={48} />
              </h2>
              <small className={css.MI__Results}>
                <Skeleton width={130} height={24} />
              </small>
            </div>
          )
          : (
            <div className={css.M__Info}>
              <h2 className={css.MI__Title}>Characters</h2>
              <small className={css.MI__Results}>{`${total} results`}</small>
            </div>
          )}
        <div className={css.M__Content}>
          {loading
            ? (
              Array(20).fill(
                <Skeleton
                  width={270}
                  height={376}
                  style={{
                    margin: 10,
                    borderRadius: '10px 30px',
                  }}
                />,
              ).map((skeleton) => skeleton)
            )
            : characters.map((character) => (
              <Card
                key={character.id}
                name={character.name}
                description={character.description}
                thumbnail={`${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`}
              />
            ))}
        </div>

        {!loading && <button className={css.M__BtnLoadMore} onClick={handleNextPage} type="button">Carregar mais</button>}
      </main>

      <Footer />
    </>
  );
};

export default Home;
