import React from 'react';
import Loader from '../UI/Loader/Loader';
import { delayPromise } from '../../utils/delay';

const HomePage = React.lazy(delayPromise(() => import('./pages/HomePage/HomePage')));

const Home: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <HomePage />
    </React.Suspense>
  );
};

export default Home;
