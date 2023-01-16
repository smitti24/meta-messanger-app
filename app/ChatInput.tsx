"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
import fetcher from "../utils/fetchMessages";
import { unstable_getServerSession } from "next-auth/next";

type Props = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

function ChatInput({ session }: Props) {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input || !session) return;

    const messageToSend = input;
    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: session?.user?.name!,
      email: session?.user?.email!,
      profilePic: session.user.image!,
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex fixed bottom-0 w-full z-50 px-10 py-5 space-x-2 border-gray-100 rgb(31, 31, 31)"
    >
      <input
        type="text"
        disabled={!session}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-1 rounded border animate-pulse focus:animate-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent px-5 py-3 text-black font-bold"
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
