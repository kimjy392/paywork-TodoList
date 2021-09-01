import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from 'Store/todo';

const useInput = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setContent(value);
  };

  const handleSubmit = () => {
    if (content === '') {
      alert('입력해주세요!');
      return;
    }
    dispatch(postTodo(content));
    setContent('');
  };

  return {
    content,
    handleSubmit,
    handleChange,
  };
};

export default useInput;
