import { connect } from 'react-redux';
import Point, { PointDispatch, PointProps } from './Point';
import { OrderFormState } from '../../store/orderFormReducer';
import { addressChangeAction } from '../../store/orderFormActions';

const ConnectedPoint = connect<PointProps, PointDispatch, { sequence: number }, OrderFormState>(
  (state, ownProps) => {
    return {
      point: state.points[ownProps.sequence],
    };
  },
  (dispatch, ownProps) => ({
    onAddressChange: (address) => dispatch(addressChangeAction(ownProps.sequence, address)),
  })
)(Point);

export default ConnectedPoint;
