import { OrderFormActions, OrderFormActionTypes } from './orderFormActions';

export type OrderPoint = {
  address: string;
};

export type OrderFormState = {
  isLoading: boolean;
  points: OrderPoint[];
  price: string;
  isCreated: boolean;
};

const defaultOrderFormState: OrderFormState = {
  isLoading: false,
  points: [{ address: '' }, { address: '' }],
  price: '',
  isCreated: false,
};

const orderFormReducer = (
  state: OrderFormState = defaultOrderFormState,
  action: OrderFormActionTypes
) => {
  switch (action.type) {
    case OrderFormActions.ADDRESS_CHANGE: {
      const { sequence, address } = action.payload;

      const points = [...state.points];
      points[sequence] = {
        ...points[sequence],
        address,
      };

      return {
        ...state,
        points,
      };
    }

    case OrderFormActions.CALCULATE_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case OrderFormActions.CALCULATE_SUCCESS:
      return {
        ...state,
        price: action.payload.price,
        isLoading: false,
      };

    case OrderFormActions.CREATE_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case OrderFormActions.CREATE_SUCCESS:
      return {
        ...state,
        isCreated: true,
      };

    default:
      return state;
  }
};

export default orderFormReducer;
