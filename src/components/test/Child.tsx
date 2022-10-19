import React from 'react';
import Test from '@/components/Parent';

const Child = (): any => {
  console.log('test');

  return (
    <div>
      테슷트
      {/* <Test /> */}
      <Test />
    </div>
  );
};

export default Child;
