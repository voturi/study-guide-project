import ChatInput  from './ChatInput'

const MainContent = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-300">What can I help with?</h1>
      </div>
      <ChatInput />
    </div>
  )
}

export default MainContent