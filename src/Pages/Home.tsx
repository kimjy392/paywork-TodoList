import React from 'react';
import styled from 'styled-components';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div>home</div>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  min-width: 350px;
`;
