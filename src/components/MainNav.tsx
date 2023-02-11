import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const MainNav: React.FC = () => {
  return (
    <>
      <div>
        <div>페이지 이동 버튼</div>
        <Link to="/axios-test">
          <button>axios-test</button>
        </Link>
        <Link to="/env-test">
          <button>env-test</button>
        </Link>
        <Link to="/recoil-test">
          <button>recoil-test</button>
        </Link>
        <p>↓↓↓ 라우팅 페이지 영역 ↓↓↓</p>
      </div>
    </>
  );
};

export default memo(MainNav);
