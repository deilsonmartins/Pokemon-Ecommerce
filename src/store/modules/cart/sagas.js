import {
  call,
  select,
  put,
  all,
  takeLatest,
  takeEvery,
  delay,
} from 'redux-saga/effects';

import {
  addToCartSuccess,
  updateAmountSuccess,
  updateAmountFailure,
} from './actions';

function* addToCart({ pokemon }) {
  yield delay(300);

  const data = {
    ...pokemon,
    amount: 1,
  };

  yield put(addToCartSuccess(data));
}

function* updateAmount({ id, amount }) {

  if (amount < 0) return;

  yield put(updateAmountSuccess(id, amount));

}

export default all([
  takeEvery('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
