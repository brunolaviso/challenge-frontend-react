import { FC } from 'react';

import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';

const CharacterProfile: FC = () => (
  <>
    <Header />
    <Cover title="Discover all comics this character took part in" />
    <Footer />
  </>
);

export default CharacterProfile;
