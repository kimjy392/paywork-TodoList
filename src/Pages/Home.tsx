import React from 'react';
import styled from 'styled-components';
import Todo from 'Component/Todo/Todo';
export const Home: React.FC = () => {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
};

const Layout = styled.div`
  min-width: 350px;
  max-width: 700px;
  margin: auto;
`;
