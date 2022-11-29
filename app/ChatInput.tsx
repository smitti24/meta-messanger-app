"use client";

import { FormEvent, useState } from "react";

function ChatInput() {
  const [input, setInput] = useState("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;
    setInput("");
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex fixed bottom-0 w-full z-50 px-10 py-5 space-x-2 border-gray-100"
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent px-5 py-3 text-black font-bold"
      />
      <button
        type="submit"
        disabled={!input}
        className="primary-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
