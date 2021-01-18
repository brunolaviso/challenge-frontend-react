import { FC } from 'react';

import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import css from './Home.module.scss';

const Home: FC = () => (
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
