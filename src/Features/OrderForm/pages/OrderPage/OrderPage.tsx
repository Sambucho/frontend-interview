import React from 'react';
import OrderForm from '../../components/OrderForm';
import Styles from './OrderPage.module.css';

const OrderPage: React.FC = () => {
  return (
    <div className={Styles.Root}>
      <OrderForm />
    </div>
  );
};

export default OrderPage;
