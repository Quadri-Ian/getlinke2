import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RegistrationSuccess = () => {
  return (
    <div className="fixed  flex w-full h-full justify-center items-center bg-opacity-10 p-4">
      <div className="bg-white p-8 rounded-lg text-center text-white flex flex-col items-center border-2">
        <Image src="/congratulation.png" width={500} height={500} alt="Success" className="mx-auto mb-4 w-full h-full" />
        <p className="text-2xl font-bold text-techpurple mb-2">Congratulations!</p>
        <p className="text-sm mb-4">Yes, it was easy and you did it!</p>
        <p className="text-sm">
          Check your mailbox for the next steps{' '}
          <Image src="/wink.png" width={20} height={20} alt="Success" className="mx-auto mb-4" />
        </p>

        <Link href='/'>
        <button
          className="w-full bg-gradient-to-r from-techpink to-techpurple py-2 px-4 text-white rounded-lg hover:bg-techpurple mt-4"
        >
          Back
        </button>            
        </Link>

      </div>
    </div>
  );
};

export default RegistrationSuccess;
