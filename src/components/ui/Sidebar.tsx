import { Home, Search, Plus, Settings } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { name: 'Year 6 Curriculam', icon: <Home size={20} /> },
    { name: 'Algebra', icon: <Search size={20} /> },
    { name: 'Python', icon: '🐍' },
    { name: 'Hot Mods', icon: '🚗' },
    { name: 'School Calendar', icon: '💪' },
    { name: 'Khan Academy Links', icon: '📹' },
    { name: 'Maths Games', icon: '🎮' },
    { name: 'Explore GPTs', icon: '🔍' },
  ]

  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img src="/vite.svg" alt="logo" className="w-8 h-8" />
          <span>Your Math Agent</span>
        </div>
        <button className="p-2 hover:bg-gray-800 rounded">
          <Settings size={20} />
        </button>
      </div>

      <button className="flex items-center space-x-2 p-2 bg-gray-800 rounded mb-4">
        <Plus size={20} />
        <span>New chat</span>
      </button>

      <div className="flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar