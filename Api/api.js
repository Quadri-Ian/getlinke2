// api/api.js (or api.ts for TypeScript)
const baseUrl = 'https://backend.getlinked.ai'; // Replace with your actual API base URL

// Function to fetch categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/hackathon/categories-list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}/hackathon/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
