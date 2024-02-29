
import React, {Suspense, lazy}from "react";

const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback='loading...'>
        
      </Suspense>
    </>
  );
};

export default GeneralApp;
