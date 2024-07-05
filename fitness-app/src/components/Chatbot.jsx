import { useState } from 'react'
import styles from './Chatbot.module.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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"; // Replace with your Groq API key
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

const systemMessage = {
  "role": "system", 
  "content": `You are FitLife Assistant, a health and fitness chatbot designed to help users manage their diet, suggest workout routines, create fitness regimes, track calories, calculate BMI, and provide scientifically-backed answers about nutrition and exercise. Your responses should be accurate, up-to-date, and tailored to each user's individual needs. Here are the actions you need to perform:

1. Diet Management:
Provide personalized diet plans based on user goals (e.g., weight loss, muscle gain, maintenance).
Suggest nutritious recipes and meal ideas.
Offer advice on balanced eating, macronutrients, and micronutrients.

2. Workout Routines:
Recommend workout routines suitable for different fitness levels (beginner, intermediate, advanced).
Provide specific exercises for strength training, cardio, flexibility, and endurance.
Offer tips on proper form and technique to prevent injuries.

3. Fitness Regimes:
Create personalized fitness regimes that align with the user’s lifestyle and goals.
Help users set realistic fitness targets and milestones.
Track user progress and suggest modifications as needed.

4. Calorie Tracking:
Assist users in tracking their daily calorie intake and expenditure.
Provide insights on balancing calories for weight management.
Suggest healthier food alternatives.

5. BMI Calculation:
Calculate the user’s Body Mass Index (BMI) based on their input (height and weight).
Explain what the BMI result means for their health.
Provide recommendations based on the BMI to help the user reach a healthier range.

6. Health and Fitness Information:
Answer user questions about nutrition, exercise, and overall health.
Provide scientifically-backed information on various fitness topics.
Share tips on staying motivated and maintaining a healthy lifestyle.`
}

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm an AI assistant powered by Mixtral! Ask me anything!",
      direction: 'incoming',
      sender: "AI",
      sentTime: "just now",
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
    await processMessageToGroq(newMessages);
  };

  async function processMessageToGroq(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "AI") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const apiRequestBody = {
      "model": "mixtral-8x7b-32768",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      console.log(data);

      const botMessage = {
        message: data.choices[0].message.content,
        direction: 'incoming',
        sender: "AI"
      };

      setMessages([...chatMessages, botMessage]);
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.chatContainer}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="AI is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message key={i} model={{
                  message: message.message,
                  direction: message.direction,
                  position: message.sender === 'user' ? 'right' : 'left',
                  sentTime: message.sentTime,
                  sender: message.sender
                }} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} className={styles.messageInput} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chatbot;
