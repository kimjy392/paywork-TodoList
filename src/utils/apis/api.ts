import data from 'Data/data.json';
import { IResponseData } from 'Store/types';

type PostRequest = {
  content: string;
  isCheck: boolean;
};

const getTodoList = () => {
  return new Promise<IResponseData>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

const createTodo = (requestBody: Partial<PostRequest>) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ msg: 'Todo가 생성되었습니다.' });
    }, 500);
  });
};

const putTodo = (id: number, requestBody: Partial<PostRequest>) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: 'Todo가 수정되었습니다.',
        content: requestBody.content,
      });
    }, 500);
  });
};

const putCheck = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: 'check가 수정되었습니다.',
      });
    }, 500);
  });
};

const deleteTodo = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: '삭제되었습니다.',
      });
    }, 500);
  });
};

export { getTodoList, createTodo, putTodo, putCheck, deleteTodo };
