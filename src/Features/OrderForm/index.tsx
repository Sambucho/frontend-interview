import React from 'react';
import Loader from '../UI/Loader/Loader';
import { delayPromise } from '../../utils/delay';

const OrderPage = React.lazy(delayPromise(() => import('./pages/OrderPage')));

const OrderForm: React.FC = () => {
  return (
    <React.Suspense fallback={Loader}>
      <OrderPage />
    </React.Suspense>
  );
};

export default OrderForm;
