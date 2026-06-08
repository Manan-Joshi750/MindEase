import { useState } from 'react'
import '../App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// 🛡️ Points locally by default, but ready for your Render URL later!
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api/chat";

// 🧠 Updated Persona: Ready for when you eventually connect a paid API key!
const systemMessage = { 
  "role": "system", 
  "content": "You are a highly empathetic and supportive mental health assistant. Provide comforting, practical, and gentle advice, but always remind the user to seek professional help for serious issues."
}

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Mental Health Bot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { 
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const fullMessagesList = [
      systemMessage,
      ...apiMessages
    ];

    // 🚀 Talking securely to your micro-backend now!
    await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages: fullMessagesList })
    }).then((data) => {
      return data.json();
    }).then((data) => {
      // 🛡️ THE SAFEGUARD: Check if OpenAI actually sent a valid response array
      if (data && data.choices && data.choices.length > 0) {
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
      } else {
        // 🚑 THE FALLBACK: What the user sees if your API quota is $0.00
        setMessages([...chatMessages, {
          message: "I am currently experiencing a high volume of requests and cannot connect to my primary servers. Please explore the resources on our site or reach out to a professional crisis hotline if you are in immediate need of support.",
          sender: "ChatGPT"
        }]);
      }
      setIsTyping(false);
    }).catch((err) => {
      // 🚑 THE OFFLINE FALLBACK: What the user sees if the backend crashes entirely
      console.error("Backend connection error:", err);
      setMessages([...chatMessages, {
        message: "My server connection was interrupted. Please try again later, and remember to reach out to a professional helpline if you need immediate assistance.",
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div id='bot' style={{ height: "32rem", width: "25rem", marginLeft:"70%", marginRight:"50%"}}>
      <MainContainer style={{borderRadius:"12px", boxShadow: "2px 2px 10px 1px #333" }}>
        <ChatContainer>      
          <MessageList
            scrollBehavior="smooth" 
            typingIndicator={isTyping ? <TypingIndicator content="Mental Health Bot is typing" /> : null}
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />        
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default ChatBot