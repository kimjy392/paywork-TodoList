import { ITodosState, TodoList } from './types';

// 액션 이름 지정
export const GET_TODOS = 'GET_TODOS' as const;
export const POST_TODO = 'POST_TODO' as const;
export const POST_ISCHECK = 'POST_ISCHECK' as const;
export const DELETE_TODO = 'DELETE_TODO' as const;
export const PUT_TODO = 'PUT_TODO' as const;
export const LOADING = 'LOADING' as const;
export const GET_TODOS_FETCH = 'GET_TODOS_FETCH' as const;
export const POST_TODO_FETCH = 'POST_TODO_FETCH' as const;
export const POST_ISCHECK_FETCH = 'POST_ISCHECK_FETCH' as const;
export const DELETE_TODO_FETCH = 'DELETE_TODO_FETCH' as const;
export const PUT_TODO_FETCH = 'PUT_TODO_FETCH' as const;

let nextId = 3;

// 액션 생성 함수
// 1. 전체 투두리스트 store의 상태로 저장
export const getTodos = (payload: TodoList) => ({ type: GET_TODOS, payload });

// 2. 하나의 투두 store의 상태에 저장
export const postTodo = (content: string) => ({
  type: POST_TODO,
  payload: {
    id: nextId++,
    content,
    isCheck: false,
    createdAt: new Date().toISOString(),
  },
});

// 3. 해당 id 투두 체크 토글 저장
export const postIscheck = (id: number) => ({
  type: POST_ISCHECK,
  id,
});

// 4. 해당 id 투두 store에서 삭제
export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
});

export const loading = () => ({
  type: LOADING,
});

// 비동기 처리를 위한 액션 생성 함수
// 1. 전체 투두리스트 불러오기
export const getTodosFetch = () => ({ type: GET_TODOS_FETCH });

// 2. 투두 생성
export const postTodoFetch = (payload: string) => ({
  type: POST_TODO_FETCH,
  payload,
});

// 3. 해당 id 투두 삭제
export const deleteTodoFetch = (id: number) => ({
  type: DELETE_TODO_FETCH,
  id,
});

// 4. 해당 id 체크 토글
export const postIsCheckFetch = (id: number) => ({
  type: POST_ISCHECK_FETCH,
  id,
});

// action 생성 함수 리턴 type 지정
export type postTodoFetchType = ReturnType<typeof postTodoFetch>;
export type deleteTodoFetchType = ReturnType<typeof deleteTodoFetch>;
export type postIsCheckFetchType = ReturnType<typeof postIsCheckFetch>;
export type TodoAction =
  | ReturnType<typeof getTodos>
  | ReturnType<typeof postTodo>
  | ReturnType<typeof postIscheck>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof loading>
  | ReturnType<typeof getTodosFetch>;

const initialState = {
  loading: false,
  data: [],
  error: false,
};

// store reducer, CURD
const todoReducer = (
  state: ITodosState = initialState,
  action: TodoAction,
): ITodosState => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: false,
        data: [...action.payload, ...state.data],
      };
    case POST_TODO:
      return {
        ...state,
        loading: false,
        data: state.data!.concat(action.payload),
      };
    case POST_ISCHECK:
      return {
        ...state,
        loading: false,
        data: state.data!.map((todo) =>
          todo.id === action.id ? { ...todo, isCheck: !todo.isCheck } : todo,
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: false,
        data: state.data!.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
