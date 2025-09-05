"use client";

import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useChatStore } from "@/zustand/store/chatStore";
import Markdown from "react-markdown";

export default function Hero() {
  const [inputVal, setInputVal] = useState("");
  const [chat, setChat] = useState(false);
  const [loader, setLoader] = useState(false);

  const { messages, addMessage} = useChatStore();

  const handleSubmit = async () => {
    if (!inputVal.trim()) return;

    const userMsg = { role: "you" as const, content: inputVal };
    addMessage(userMsg);
    setInputVal("");
    setLoader(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: inputVal }),
      });
      const data = await res.json();

      addMessage({ role: "ai", content: data.text });
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      {!chat && messages.length == 0 ? (
        <>
          <h1 className="text-3xl md:text-6xl font-bold mt-8">
            Start talking to <span className="text-pink-600">🤖 Kaos</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm">
            Your friendly AI chat assistant! Start chatting now!{" "}
            <span>😊✨</span>
          </p>
        </>
      ) : (
        <div className="mt-8 w-full max-w-2xl h-[calc(80vh-112px)] overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col ${
                msg.role === "you" ? "text-right" : "text-left"
              }`}
            >
              <h3
                className={`${
                  msg.role === "you" ? "text-blue-600" : "text-pink-600"
                } text-lg`}
              >
                {msg.role}
              </h3>

              <div
                className={`${
                  msg.role === "you"
                    ? ""
                    : "bg-pink-100 p-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-pink-300"
                }`}
              >
                <Markdown>{msg.content}</Markdown>
              </div>
            </div>
          ))}

          {loader && (
            <div className="w-full flex flex-col text-left animate-pulse mt-2">
              <h3 className="text-pink-600 text-lg">ai</h3>
              <div className="bg-pink-100 p-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-pink-300 inline-block">
                <span className="inline-block w-2 h-2 bg-pink-400 rounded-full animate-bounce mr-1"></span>
                <span className="inline-block w-2 h-2 bg-pink-400 rounded-full animate-bounce mr-1 [animation-delay:.2s]"></span>
                <span className="inline-block w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:.4s]"></span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 w-full max-w-2xl border border-neutral-200 rounded-lg shadow-xl shadow-neutral-200">
        <div className="relative">
          <textarea
            placeholder="Ask Anything..."
            className="w-full h-28 resize-none p-3 text-lg focus:outline-none rounded-b-lg"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                setChat(true);
                handleSubmit();
              }
            }}
          />
          {inputVal && (
            <button
              className="absolute bottom-2 right-2 p-2 rounded-md hover:bg-pink-400 bg-pink-600 text-white transition cursor-pointer"
              onClick={() => {
                setChat(true);
                handleSubmit();
              }}
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
