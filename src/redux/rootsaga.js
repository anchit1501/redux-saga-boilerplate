function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}
