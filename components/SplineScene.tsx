
import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const Loader = () => (
    <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
    </div>
);

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Spline
        scene={scene}
        className={`w-full h-full ${className || ''}`}
      />
    </Suspense>
  );
}
