"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Hero() {
  const [model, setModel] = useState("GPT-4o mini");

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-6xl font-bold mt-8">
        Start talking to <span className="text-pink-600">🤖 Kaos</span>
      </h1>

   
      <p className="mt-4  max-w-xl text-sm ">
        Your friendly AI chat assistant! Need quick answers, smart suggestions,
        or just a cheerful conversation? Jolly is here to help with a smile.
        Start chatting now! <span className="ml-1">😊✨</span>
      </p>

     
      <div className="mt-8 w-full max-w-2xl border border-neutral-200 rounded-lg shadow-xl shadow-neutral-200">
        <div className="relative">
          <textarea
            placeholder="Ask Anything..."
            className="w-full h-28 resize-none p-3 text-sm focus:outline-none rounded-b-lg"
          />
          <button className="absolute bottom-2 right-2 p-2 rounded-md hover:bg-pink-400 bg-pink-600 text-white transition cursor-pointer">
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
