"use client";

import { Suspense } from 'react';
import Results from '../_components/results';

const ResultsPage = () => {
  return (
    <Suspense fallback={<div className="text-center text-gray-200">Loading...</div>}>
      <Results />
    </Suspense>
  );
};

export default ResultsPage;