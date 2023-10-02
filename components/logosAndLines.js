import React from 'react';
import Image from 'next/image';

const LogosAndLines = () => {
  return (
    <div className="border border-techpurple p-4 items-center h-full">
      {/* Top row of logos */}
      <div className=' justify-center items-center ' id="containerr">
        <div className="boxx">
          <div className="" style={{ height: '20px' }}>
            <Image
              src="/logo1.png"
              alt="Logo 1"
              width={30}
              height={20}
              className="w- h-auto"
            />
          </div>
        </div>
        <div className="boxx borderx">
          <div className="" style={{ height: '20px' }}>
            <Image
              src="/logo2.png"
              alt="Logo 2"
              width={80}
              height={20}
              className="w- h-auto "
            />
          </div>
        </div>
        <div className="boxx">
          <div className="" style={{ height: '20px' }}>
            <Image
              src="/logo3.png"
              alt="Logo 3"
              width={30}
              height={20}
              className="w- h-auto"
            />
          </div>
        </div>
        <div className="boxx bordery">
          <div className="" style={{ height: '20px' }}>
            <Image
              src="/logo4.png"
              alt="Logo 4"
              width={40}
              height={20}
              className="w- h-auto "
            />
          </div>
        </div>
        <div className="boxx bordery borderyy pt-[3px]">
          <div className="" style={{ height: '20px' }}>
            <Image
              src="/logo5.png"
              alt="Logo 5"
              width={80}
              height={20}
              className="w- h-auto "
            />
          </div>
        </div>
        <div className="boxx bordery">
          <div className="" style={{ height: '20px' }}>
            <Image
              src="/logo6.png"
              alt="Logo 6"
              width={60}
              height={20}
              className="w- h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosAndLines;
