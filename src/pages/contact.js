// pages/contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  return (
    <div className="flex space-x-28 xl:space-x-64 lg:mx-36 ">
      <div className="hidden lg:block p-4 space-y-6 text-white">
        <h1 className="text-3xl font-semibold text-techpurple ">Get in Touch</h1>
        <p>Contact Information</p>
        <p>27 Alara Street, Yaba, 100012, Lagos State</p>
        <p>Call Us: 07067981819</p>
        <p>We are open from Monday-Friday</p>
        <p>08:00am - 05:00pm</p>
        {/* Add your social media icons here */}
        <div className='text-left mt-6'>
        <p className='text-techpurple'>Share on</p>
        <div className='flex justify- text-white space-x-2'>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
      </div>
      </div>
        <div>
      <div className="flex-1  p-8  rounded-lg lg:p-12 bg-opacity-10 backdrop-blur-sm bg-blue-100">

        <h2 className="text-3xl text-techpurple font-semibold ">I agreed with the event terms and conditions  and privacy policy</h2>
        <p className='text-white py-3'>Email us below to any question related 
to our event</p>
        <form className="space-y-4">
          <input
            className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white "
            type="text"
            placeholder="Team's Name"
          />
          <input
            className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
            type="text"
            placeholder="Topic"
          />
          <input
            className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
            type="email"
            placeholder="E-mail"
          />
          <textarea
            className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
            rows="4"
            placeholder="Message"
          ></textarea>

        </form>
        <div className='w-full flex justify-center'>
          <button
            className="bg-gradient-to-r from-techpink to-techpurple mt-4 text-white font-semibold p-2  px-4 text-center rounded-lg "
            type="submit"
          >
            Submit
          </button>          
        </div>
        </div>      

      <div className='lg:hidden text-center mt-6'>
        <p className='text-techpurple'>Share on</p>
        <div className='flex justify-center text-white space-x-2'>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
      </div>
      </div>

    </div>
  );
};

export default Contact;
