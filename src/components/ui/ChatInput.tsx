import { Image, FileText, PenTool, Eye, MoreHorizontal } from 'lucide-react'

const ChatInput = () => {
  return (
    <div className="p-4 border-t">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="ask your maths agent..."
            className="w-full p-4 pr-32 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Image size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <FileText size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <PenTool size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Eye size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInput