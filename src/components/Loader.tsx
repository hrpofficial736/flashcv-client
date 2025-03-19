import React from 'react';
import { PuffLoader } from 'react-spinners';

export const Loader : React.FC = () => {
  return (
    <div className="column-center-flex gap-y-2">
      <PuffLoader />
      <h1 className="text-xl font-poppins font-semibold text-black/60">
        Hang on...
      </h1>
    </div>
  );
}
