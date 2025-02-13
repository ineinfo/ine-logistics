import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#a7bbe2ad] z-50">
      <DotLottieReact
        src="https://lottie.host/b08d56f4-79d9-428a-98ed-a9c7efae399f/apjCfz9uzP.lottie"
        style={{ width: 250, height: 250 }}
        loop
        autoplay
      />
    </div>
  );
};

export default Loader;
