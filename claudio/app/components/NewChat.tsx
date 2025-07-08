import React from "react";
import { PiNoteBlankLight } from "react-icons/pi";


const NewChat = () => {
  return (
    <button  className="flex gap-3 items-center hover:bg-white/20 p-2 rounded-xl cursor-pointer">
      <PiNoteBlankLight className="text-2xl " /> <h1>Novo Chat</h1>
    </button>
  );
};

export default NewChat;

