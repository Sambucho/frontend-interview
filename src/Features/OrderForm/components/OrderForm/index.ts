import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import OrderForm, { OrderFormProps, OrderFormDispatch } from './OrderForm';
import { OrderFormState } from '../../store/orderFormReducer';
import { createOrderAction, OrderFormActionTypes } from '../../store/orderFormActions';

const ConnectedOrderForm = connect<OrderFormProps, OrderFormDispatch, unknown, OrderFormState>(
  (state) => ({
    isLoading: state.isLoading,
    pointCount: state.points.length,
    price: state.price,
  }),
  (dispatch: ThunkDispatch<OrderFormState, unknown, OrderFormActionTypes>) => ({
    createOrder: () => dispatch(createOrderAction()),
  })
)(OrderForm);

export default ConnectedOrderForm;
