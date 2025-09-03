// import Chat from "@/components/Chat";
import ChatBox from "@/components/ChatBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home(){
  return <div className="w-full h-screen relative">
    <Sidebar/>
   {/* <Chat/> */}
   <ChatBox/>
  </div>
}