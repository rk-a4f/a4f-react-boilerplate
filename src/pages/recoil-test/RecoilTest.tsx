import React from 'react';
import RecoilInput from '@/components/recoil-test/RecoilInput';
import RecoilValue from '@/components/recoil-test/RecoilValue';

const RecoilTest: React.FC = () => {
  return (
    <>
      <p>리코일 테스트 페이지!!!</p>
      <RecoilInput />
      <RecoilValue />
    </>
  );
};

export default RecoilTest;
