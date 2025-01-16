//const API_URL = import.meta.env.REACT_APP_API_URL;

export const chatService = {
  async sendMessage(message: string) {
    try {
      const response = await fetch(`http://localhost:8000/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};