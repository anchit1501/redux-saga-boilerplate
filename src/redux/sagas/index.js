import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews() {
  const json = yield fetch(
    "https://extendsclass.com/api/json-storage/bin/cbeebcd"
  ).then((response) => response.json());
  yield put({ type: "USER_DATA_RECEIVED", json: json });
}

function* actionWatcher() {
  yield takeLatest("USER_LOGIN", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
