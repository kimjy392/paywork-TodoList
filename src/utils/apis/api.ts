import data from 'Data/data.json';
const baseUrl = 'http://dummy-server.io';

type PostRequest = {
  content: string;
  isCheck: boolean;
};

const getTodoList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

// {content : string}
const createTodo = (requestBody: Partial<PostRequest>) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ msg: 'Todo가 생성되었습니다.' });
    }, 500);
  });
};

// {content : string}
const putTodo = (id: number, requestBody: Partial<PostRequest>) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: 'Todo가 수정되었습니다.',
        content: requestBody.content,
      });
    });
  });
};

// {isCehck : boolean}
const putCheck = (id: number, requestBody: Partial<PostRequest>) => {
  return new Promise((resolve) => {
    resolve({
      msg: 'check가 수정되었습니다.',
    });
  });
};

// {}
const deleteTodo = (id: string) => {
  return new Promise((resolve) => {
    resolve({
      msg: '삭제되었습니다.',
    });
  });
};

export { getTodoList, createTodo, putTodo, putCheck, deleteTodo };
