import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatmessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(20)+" 🚀",
        })
      );
    }, 200);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {
        // DON'T USE INDEXES AS KEY
        chatmessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
  );
};

export default LiveChat;
