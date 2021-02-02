import { FC, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';
import Comic from '../../components/Comic';
import Character from '../../components/Character';
import api from '../../services/api';

import css from './CharacterComics.module.scss';

interface IAPIResponse {
  data: {
    count: number,
    limit: number,
    offset: number,
    results: IComics[],
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

interface IComics {
  id: number,
  title: string,
  description: string,
  pageCount: number,
  prices: [{ price: number }]
  thumbnail: {
    extension: string,
    path: string
  }
}

const CharacterProfile: FC = () => {
  // const [offset, setOffset] = useState<number>(0);
  const [comics, setComics] = useState<IComics[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const { state } = useLocation<ICharacters>();

  console.log(state.id);

  useEffect(() => {
    api.get<IAPIResponse>(`characters/${state.id}/comics`, {
      params: {
        limit: 24,
        // offset,
      },
    }).then((response) => {
      setComics([...comics, ...response.data.data.results]);
      setTotal(response.data.data.total);
      setLoading(false);
    });
  }, []);

  console.log(comics);

  return (
    <>
      <Header />
      <Cover title="Discover all comics this character took part in">
        <div className={css.M__Character} style={{ width: '100%', margin: '50px 0 -200px' }}>
          {loading
            ? (
              <Skeleton width="100%" height="250px" style={{ borderRadius: '10px 50px' }} />
            )
            : (
              <Character
                id={state.id}
                name={state.name}
                description={state.description}
                thumbnail={state.thumbnail}
              />
            )}
        </div>
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
              <h2 className={css.MI__Title}>Comics</h2>
              <small className={css.MI__Results}>{`${total} results`}</small>
            </div>
          )}
        <div className={css.M__Content}>
          {loading
            ? (
              Array(20).fill(
                <Skeleton
                  width="100%"
                  height={200}
                  style={{
                    margin: '16px 0',
                    borderRadius: '10px 30px',
                  }}
                />,
              ).map((skeleton) => skeleton)
            )
            : (
              comics.map(({
                id, title, description, pageCount, prices, thumbnail,
              }) => (
                <div style={{ margin: '16px 0' }}>
                  <Comic
                    key={id}
                    title={title}
                    description={description}
                    pageCount={pageCount}
                    price={prices[0].price}
                    thumbnail={thumbnail}
                  />
                </div>
              ))
            )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CharacterProfile;
