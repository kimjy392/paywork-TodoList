export interface ITodo {
  id: number;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

export type TodoList = ITodo[];

export interface IResponseData {
  count: number;
  todoList: TodoList;
}

export interface ITodosState {
  loading: boolean;
  data: TodoList;
  error: boolean;
}
