import React from 'react';
import Input from '../../../UI/Input/Input';
import Styles from './Point.module.css';
import { OrderPoint } from '../../store/orderFormReducer';

export type PointProps = { point: OrderPoint };
export type PointDispatch = { onAddressChange: (address: string) => void };

const Point: React.FC<PointProps & PointDispatch> = ({ point, onAddressChange }) => {
  return (
    <div className={Styles.Root}>
      <label>
        <div className={Styles.AddressLabel}>Адрес:</div>
        <Input value={point.address} onChange={onAddressChange} />
      </label>
    </div>
  );
};

export default Point;
