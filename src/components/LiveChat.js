import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatmessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      //console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 border border-black bg-slate-100 rounded-lg relative">
      <div className="h-full p-2 overflow-y-scroll pb-16 flex flex-col-reverse">
        {
          // DON'T USE INDEXES AS KEY
          chatmessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="absolute bottom-0 left-0 w-full p-2 ml-2 pr-2 border border-black bg-white flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
         // console.log("On Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Tech Monk",
              message:  liveMessage ,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="w-96 border px-2 py-1"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
