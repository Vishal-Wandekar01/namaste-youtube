const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow p-2">
      <img
        className="h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYNUR0cDh_AMKk8M1h1TzUHFlcuRBfCsIMg&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
