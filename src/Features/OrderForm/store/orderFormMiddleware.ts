import { Dispatch, Middleware } from 'redux';
import { OrderFormState } from './orderFormReducer';
import {
  OrderFormActionTypes,
  OrderFormActions,
  calculateRequestedAction,
  calculateSuccessAction,
} from './orderFormActions';
import { calculateOrder } from '../providers/orderProvider';

const calculateMiddleware: Middleware<unknown, OrderFormState, Dispatch<OrderFormActionTypes>> = (
  store
) => (next) => (action: OrderFormActionTypes) => {
  next(action);

  if (action.type !== OrderFormActions.ADDRESS_CHANGE) {
    return;
  }

  const state = store.getState();

  next(calculateRequestedAction());

  calculateOrder({
    points: state.points,
  }).then((response) => {
    next(calculateSuccessAction(response.price));
  });
};

export default calculateMiddleware;
