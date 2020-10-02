import { ThunkAction } from 'redux-thunk';
import type { OrderFormState } from './orderFormReducer';
import { createOrder } from '../providers/orderProvider';

export enum OrderFormActions {
  ADDRESS_CHANGE = 'ORDER_FORM/ADDRESS_CHANGE',
  CALCULATE_REQUESTED = 'ORDER_FORM/CALCULATE_REQUESTED',
  CALCULATE_SUCCESS = 'ORDER_FORM/CALCULATE_SUCCESS',
  CREATE_REQUESTED = 'ORDER_FORM/CREATE_REQUESTED',
  CREATE_SUCCESS = 'ORDER_FORM/CREATE_SUCCESS',
}

const addressChangeAction = (
  sequence: number,
  address: string
): { type: OrderFormActions.ADDRESS_CHANGE; payload: { sequence: number; address: string } } => ({
  type: OrderFormActions.ADDRESS_CHANGE,
  payload: {
    sequence,
    address,
  },
});

const calculateRequestedAction = (): { type: OrderFormActions.CALCULATE_REQUESTED } => ({
  type: OrderFormActions.CALCULATE_REQUESTED,
});

const calculateSuccessAction = (
  price: number
): {
  type: OrderFormActions.CALCULATE_SUCCESS;
  payload: {
    price: number;
  };
} => ({
  type: OrderFormActions.CALCULATE_SUCCESS,
  payload: {
    price,
  },
});

const createRequestedAction = (): { type: OrderFormActions.CREATE_REQUESTED } => ({
  type: OrderFormActions.CREATE_REQUESTED,
});

const createSuccessAction = (): { type: OrderFormActions.CREATE_SUCCESS } => ({
  type: OrderFormActions.CREATE_SUCCESS,
});

export type OrderFormActionTypes =
  | ReturnType<typeof addressChangeAction>
  | ReturnType<typeof calculateRequestedAction>
  | ReturnType<typeof calculateSuccessAction>
  | ReturnType<typeof createRequestedAction>
  | ReturnType<typeof createSuccessAction>;

const createOrderAction = (): ThunkAction<
  Promise<void>,
  OrderFormState,
  unknown,
  OrderFormActionTypes
> => {
  return async (dispatch, getState) => {
    dispatch(createRequestedAction());

    const state = getState();
    createOrder({
      points: state.points,
    }).then((response) => {
      const pointsText = response.points
        .map((point, index) => `${index}. ${point.address}`)
        .join('\n');

      alert(`Заказ создан!\nТочки:\n${pointsText}\nЦена: ${response.price}`);
      dispatch(createSuccessAction());
    });
  };
};

export { addressChangeAction, calculateRequestedAction, calculateSuccessAction, createOrderAction };
