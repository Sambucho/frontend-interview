import React from 'react';
import Loader from '../UI/Loader/Loader';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const Home: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <HomePage />
    </React.Suspense>
  );
};

export default Home;
