import { FC } from 'react';

import Header from '../../components/Header';
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';
import Comic from '../../components/Comic';
import Character from '../../components/Character';

import css from './CharacterComics.module.scss';

const CharacterProfile: FC = () => (
  <>
    <Header />
    <Cover title="Discover all comics this character took part in" />
    <main className={`container ${css.Main}`}>
      <Character />
      <Comic />
    </main>
    <Footer />
  </>
);

export default CharacterProfile;
