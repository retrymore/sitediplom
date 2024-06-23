import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const chatengine = dynamic(() => 
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(()=>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document != null){
      setShowChat(true)
    }
  })
  if(!showChat) return <div/>;

  useEffect(()=>{
    if(username.length === 0 || secret.length === 0) router.push("/");
  })

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100ch - 200px)"
          projectID="42d69284-dfca-4d37-b406-dcd63db569db"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial/>}
        />
      </div>
    </div>
)
}
