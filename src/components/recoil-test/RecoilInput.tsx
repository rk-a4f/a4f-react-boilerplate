import React, { memo } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '@/store/sample';

const RecoilInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      입력 텍스트: {text}
    </div>
  );
};

export default memo(RecoilInput);
