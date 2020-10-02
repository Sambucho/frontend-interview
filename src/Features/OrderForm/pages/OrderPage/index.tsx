import React from 'react';
import { Provider } from 'react-redux';
import OrderPage from './OrderPage';
import Application from '../../../../Application/Application';
import orderFormReducer from '../../store/orderFormReducer';
import orderFormMiddleware from '../../store/orderFormMiddleware';

const ConnectedOrderPage: React.FC = () => {
  const store = Application.createStore(orderFormReducer, orderFormMiddleware);

  return (
    <Provider store={store}>
      <OrderPage />
    </Provider>
  );
};

export default ConnectedOrderPage;
