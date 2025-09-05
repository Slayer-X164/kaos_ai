
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Message {
  role: "you" | "ai";
  content: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (msg: Message) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
      clearChat: () => set({ messages: [] }),
    }),
    { name: "kaos-last-chat" }
  )
);
