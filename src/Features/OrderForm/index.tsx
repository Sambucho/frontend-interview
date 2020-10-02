import React from 'react';
import Loader from '../UI/Loader/Loader';

const OrderPage = React.lazy(() => import('./pages/OrderPage'));

const OrderForm: React.FC = () => {
  return (
    <React.Suspense fallback={Loader}>
      <OrderPage />
    </React.Suspense>
  );
};

export default OrderForm;
