import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../../redux/user/user.types';
import { clearCart } from '../../redux/cart/cart.actions';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
