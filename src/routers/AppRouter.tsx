import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazyComponent } from '@/utils/lazyUtil';

const LazyAxiosTest = lazyComponent(lazy(() => import('@/pages/axios-test/AxiosTest')));
const LazyEnvTest = lazyComponent(lazy(() => import('@/pages/env-test/EnvTest')));
const LazyRecoilTest = lazyComponent(
  lazy(() => import('@/pages/recoil-test/RecoilTest')),
  <div>Loading...</div>
);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/axios-test" element={<LazyAxiosTest />} />
      <Route path="/env-test" element={<LazyEnvTest />} />
      <Route path="/recoil-test" element={<LazyRecoilTest />} />
      <Route path="*" element={<Navigate replace to="/axios-test" />} />
    </Routes>
  );
};

export default AppRouter;
