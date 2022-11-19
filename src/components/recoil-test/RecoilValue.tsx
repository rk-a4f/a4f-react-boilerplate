import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '@/store/sample';

const RecoilSelector: React.FC = () => {
  const inputValue = useRecoilValue(charCountState);

  return <>출력 텍스트: {inputValue}</>;
};

export default memo(RecoilSelector);
