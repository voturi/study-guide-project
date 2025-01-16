// src/components/ChatInput.tsx
import { useState } from 'react';
import { Image, FileText, PenTool, Eye, MoreHorizontal } from 'lucide-react';
import { sendMessage } from '../../services/api';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await sendMessage(message);
      setResponse(result.response);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="p-4 border-t">
      <div className="max-w-3xl mx-auto">
        {response && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            {response}
          </div>
        )}
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message ChatGPT"
            className="w-full p-4 pr-32 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button type="button" className="p-2 hover:bg-gray-100 rounded">
              <Image size={20} />
            </button>
            <button type="button" className="p-2 hover:bg-gray-100 rounded">
              <FileText size={20} />
            </button>
            <button type="button" className="p-2 hover:bg-gray-100 rounded">
              <PenTool size={20} />
            </button>
            <button type="button" className="p-2 hover:bg-gray-100 rounded">
              <Eye size={20} />
            </button>
            <button type="button" className="p-2 hover:bg-gray-100 rounded">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;