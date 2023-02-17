/* eslint-disable react/display-name */
import React, { Suspense } from 'react';

export const lazyComponent =
  (LazyComponent: React.FC, fallback: React.ReactNode = null): React.FC =>
  () =>
    (
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    );
