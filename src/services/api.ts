// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL;

export const sendMessage = async (message: string) => {
  try {
    console.log(API_URL)
    const response = await fetch(`${API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text(); // Get the raw response text
    console.log('Raw response:', text); // Debug log
    
    try {
      return JSON.parse(text); // Try to parse it as JSON
    } catch (e) {
      console.error('Failed to parse JSON:', text);
      throw new Error('Invalid JSON response from server');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};