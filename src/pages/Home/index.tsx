/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import Skeleton from 'react-loading-skeleton';
import InfiniteScroll from 'react-infinite-scroller';
import { useHistory } from 'react-router-dom';
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
  // const [charactersSearch, setCharactersSearch] = useState<ICharacters[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  // const [limit, setLimit] = useState<number>(24);
  const [total, setTotal] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [hasMore, setHasMore] = useState<boolean>(true);

  const history = useHistory();

  useEffect(() => {
    // setLoading(true);
    api.get<IAPIResponse>('characters', {
      params: {
        limit: 24,
        offset,
      },
    }).then((response) => {
      setCharacters([...characters, ...response.data.data.results]);
      setTotal(response.data.data.total);
      setLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (value) {
      api.get<IAPIResponse>('characters', {
        params: {
          nameStartsWith: value,
        },
      }).then((response) => {
        setCharacters(response.data.data.results);
      });
    }
  }, [value]);

  const handleNextPage = useCallback(() => {
    setOffset(offset + 24);
  }, [characters]);

  const handleSearchData = useCallback((data: string) => {
    setHasMore(false);
    setValue(data);
  }, []);

  const handleNavigate = ({
    id, name, description, thumbnail,
  }: ICharacters) => {
    history.push(`/characters/${name}/comics`, {
      id, name, description, thumbnail,
    });
  };

  const loader = <div className="loader">Loading scroller...</div>;

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
        <InfiniteScroll
          pageStart={0}
          hasMore={hasMore}
          loader={loader}
          loadMore={handleNextPage}
        >
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
              : (
                characters.map((character) => (
                  <button className={css.MC__btn} type="button" onClick={() => handleNavigate(character)}>
                    <Card
                      key={character.id}
                      name={character.name}
                      description={character.description}
                      thumbnail={`${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`}
                    />
                  </button>
                )))}
          </div>
        </InfiniteScroll>

        {!loading && <button className={css.M__BtnLoadMore} onClick={handleNextPage} type="button">Carregar mais</button>}
      </main>

      <Footer />
    </>
  );
};

export default Home;
