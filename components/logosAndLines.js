import React from 'react';
import Image from 'next/image';

const LogosAndLines = () => {
  return (
    <div className=" border border-techpurple p-4 items-cente ">
        {/* Top row of logos */}
        <div className='flex justify-between items-center  md:px-24'>
        <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2 ">
          <Image
            src="/logo1.png"
            alt="Logo 1"
            width={30}
            height={20}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2 border-x-4 border-techpurple ">
          <Image
            src="/logo2.png"
            alt="Logo 2"
            width={60}
            height={20}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
          <Image
            src="/logo3.png"
            alt="Logo 3"
            width={30}
            height={20}
            className="w-full h-auto"
          />
        </div>        
        </div>

        <div className='flex  space-x-8 lg:space-x-0 justify-center items-center w-full'>
          <hr className='  px-6  border-techpurple  border-2'/>
          <hr className=' h- w-4 px-6  border-techpurple  border-2'/>
          <hr className=' h- w-4 px-6  border-techpurple  border-2'/>
        </div>

        
        {/* Bottom row of logos */}
        <div className='flex justify-between items-center md:px-24'>
       <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2 ">
          <Image
            src="/logo4.png"
            alt="Logo 4"
            width={40}
            height={20}
            className="w-full h-auto "
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2 md:px-6 border-x-4 border-techpurple  border-half">
          <Image
            src="/logo5.png"
            alt="Logo 5"
            width={60}
            height={20}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2 ">
          <Image
            src="/logo6.png"
            alt="Logo 6"
            width={40}
            height={20}
            className="w-full h-auto"
          />
        </div>          
        </div>
 

    </div>
  );
};

export default LogosAndLines;
