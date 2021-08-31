export interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createAt: Date;
}

export type TodoList = ITodo[];

export interface IResponseData {
  count: number;
  todoList: TodoList;
}
