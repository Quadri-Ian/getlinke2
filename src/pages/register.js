import React, { useState, useEffect } from 'react';
import RegistrationSuccess from '../../components/registrationSuccess'; // Import the RegistrationSuccess component
import Image from 'next/image';
import { fetchCategories, registerUser } from '/api/api'; // Import API functions
import Navbar from 'components/navbar.js';


const Register = () => {
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [categories, setCategories] = useState([]);
  
  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  // Function to handle form submission
  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
  
    // Form data should be collected from form inputs
    const formData = {
      email: e.target.email.value,
      phone_number: e.target.phone.value,
      team_name: e.target.teamName.value,
      group_size: parseInt(e.target.groupSize.value),
      project_topic: e.target.projectTopic.value,
      category: parseInt(e.target.category.value),
      privacy_poclicy_accepted: e.target.termsAndConditions.checked,
    };
  
    try {
      // Send registration data to the API
      const response = await registerUser(formData);
  
      // Check if registration is successful
      if (response.id) {
        setRegistrationSuccessful(true); // Set this to true to display the success message
      } else {
        console.error('Registration failed:', response);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  

  return (
    <div>
      <div className='border-b-[1px] border-gray-600 fixed top-0 w-full z-10 bg-opacity-75 backdrop-blur-lg'>
            <Navbar />
      </div>

    <div className="flex mt-20">
      {/* ... Your existing code ... */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center bg-image-url">
          {/* Replace "bg-image-url" with your image URL */}
          <Image
          src='/3d-graphic.png'
          alt='img'
          width={500}
          height={500}
          className='w-full h-full'
          />
        </div>
        {isRegistrationSuccessful ? (
        <RegistrationSuccess />
      ) : (
        // ... Render the registration form ...
        <div className="w-full lg:w-1/2 ">
          <div className=" p-8">
            <h2 className="text-techpurple text-3xl font-bold mb-4">Register</h2>
            <p className="text-white mb-4 flex items-center relative">
              Be part of this movement! <span className='text-techpurple'>.............</span> <Image src="/girly.png" alt="boyi" width={26} height={30} className="inline self-start -ml-8 -mt-2" />{' '}
              <Image src="/boyi.png" alt="boyi" width={26} height={30} className="inline self-start -ml-4 -mt-2" />
            </p>
            <p className="mb-6 text-white">CREATE YOUR ACCOUNT</p>

            {/* Registration Form */}
            <form onSubmit={handleRegistrationSubmit}>
              <div className='lg:flex lg:space-x-4'>
              <div className="mb-4 lg:w-1/2">
                <label className="block text-white mb-1" htmlFor="teamName">
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  placeholder="Enter the name of your group"
                  className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
                  required
                />
              </div>
              <div className="mb-4 lg:w-1/2">
                <label className="block text-white mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Enter your phone address"
                className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
                required
                />
              </div>
              </div >

              <div className='lg:flex lg:space-x-4'>
              <div className="mb-4 lg:w-1/2">
                <label className="block text-white mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email address"
              className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
                  required
                />
              </div>
              <div className="mb-4 lg:w-1/2">
                <label className="block text-white mb-1" htmlFor="projectTopic">
                  Project Topic
                </label>
                <input
                  type="text"
                  id="projectTopic"
                  name="projectTopic"
                  placeholder="Enter your group topic"
              className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
                  required
                />
              </div>

              </div>

              <div className='lg:flex lg:space-x-4'>
              <div className="mb-4 lg:w-1/2">
                <label className="block text-white mb-1" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
              className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
                  required
                >
                  <option value="" disabled selected>
                    Select your category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 lg:w-1/2">
                    <label className="block text-white mb-1" htmlFor="groupSize">
                    Group Size
                    </label>
                    <select
                    id="groupSize"
                    name="groupSize"
                    className="bg-opacity-10 backdrop-blur-sm bg-blue-100 p-2 rounded-sm w-full border-2 text-white"
                    required
                    >
                    <option value="" disabled selected>
                        Select your group size
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more group size options here */}
                    </select>
                </div>
              </div>
              <p className="text-techpurple mb-4">
                Please review your registration details before submitting
              </p>

              <div className="mb-6">
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  className="mr-2"
                  required
                />
                <label className="text-white" htmlFor="termsAndConditions">
                  I agree with the event terms and conditions and privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-techpink to-techpurple py-2 text-white rounded-lg hover:bg-techpurple"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </div>      
    </div>

  );
};

export default Register;
