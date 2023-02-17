import React from 'react';

const EnvTest: React.FC = () => {
  return (
    <>
      <p>env 테스트!!!</p>
      <p>
        {process.env.NODE_ENV} , {process.env.REACT_APP_ENVIRONMENT}
      </p>
    </>
  );
};

export default EnvTest;
