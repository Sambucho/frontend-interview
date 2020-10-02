import React from 'react';
import Point from '../Point';
import Styles from './OrderForm.module.css';

export type OrderFormProps = {
  isLoading: boolean;
  pointCount: number;
  price: string;
};
export type OrderFormDispatch = {
  createOrder: () => void;
};

const OrderForm: React.FC<OrderFormProps & OrderFormDispatch> = ({
  isLoading,
  pointCount,
  price,
  createOrder,
}) => {
  const points: JSX.Element[] = [];
  for (let i = 0; i < pointCount; i++) {
    points.push(
      <div className={Styles.Point} key={i}>
        <Point sequence={i} />
      </div>
    );
  }

  return (
    <div className={Styles.Root}>
      {points}
      <button type="button" disabled={isLoading} onClick={createOrder}>
        Создать заказ
      </button>
      {price !== '' && (
        <div className={Styles.Price}>
          Цена: <b>{price} руб.</b>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
