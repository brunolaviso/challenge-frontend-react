import { FC } from 'react';

import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Home: FC = () => (
  <>
    <Header />
    <Cover title="Explore the most powerful characters in Marvel">
      <Search />
    </Cover>
    <Card />
    <Footer />
  </>
);

export default Home;
