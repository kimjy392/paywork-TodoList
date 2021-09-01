import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getTodos,
  postTodo,
  postTodoFetchType,
  deleteTodoFetchType,
  postIsCheckFetchType,
  deleteTodo,
  DELETE_TODO_FETCH,
  postIscheck,
  POST_ISCHECK_FETCH,
  GET_TODOS_FETCH,
  POST_TODO_FETCH,
} from 'Store/todo';
import { IResponseData } from 'Store/types';
import {
  getTodoList,
  createTodo,
  deleteTodo as deleteTodoApi,
  putCheck,
} from 'utils/apis/api';

// react-saga의 비동기 처리
// 1. 전체 투두리스트 요청 및 상태 저장
function* getTodoSaga() {
  try {
    const data: IResponseData = yield call(getTodoList);
    yield put(getTodos(data.todoList!));
  } catch (e) {
    console.log(e);
  }
}

// 2. 하나의 투두 생성 요청
function* postTodoSaga(action: postTodoFetchType) {
  try {
    const { msg } = yield call(createTodo, { content: action.payload });
    console.log(msg);
    yield put(postTodo(action.payload));
  } catch (e) {
    console.log(e);
  }
}

// 3. 해당 id 투두 삭제 요청
function* deleteTodoSaga(action: deleteTodoFetchType) {
  try {
    const { msg } = yield call(deleteTodoApi, action.id);
    console.log(msg);
    yield put(deleteTodo(action.id));
  } catch (e) {
    console.log(e);
  }
}

// 4. 해당 id 투두 체크 토글 요청
function* postIsCheck(action: postIsCheckFetchType) {
  try {
    const { msg } = yield call(putCheck, action.id);
    console.log(msg);
    yield put(postIscheck(action.id));
  } catch (e) {
    console.log(e);
  }
}

export function* watchTodoSaga() {
  yield takeEvery(GET_TODOS_FETCH, getTodoSaga);
  yield takeLatest(POST_TODO_FETCH, postTodoSaga);
  yield takeEvery(DELETE_TODO_FETCH, deleteTodoSaga);
  yield takeEvery(POST_ISCHECK_FETCH, postIsCheck);
}

function* rootSaga() {
  yield all([watchTodoSaga()]);
}

export default rootSaga;
