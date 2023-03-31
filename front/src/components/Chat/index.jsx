import React from "react";
import ChatBot from "react-simple-chatbot";
import { ChatContainer } from "./ChatElement";
import { ThemeProvider } from "styled-components";
import { useGetService } from "../../hook/useGetService";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Ubuntu",
  headerBgColor: "#F9B81F",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#F9B81F",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#504f60",
};


function Chat() {
  const { data } = useGetService(true);
  if (!data || data.length === 0) return null;
  return (
    <>
      <ChatContainer>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Simple Chatbot"
            speechSynthesis={{ enable: false, lang: "es" }}
            steps={data}
          />
        </ThemeProvider>
      </ChatContainer>
    </>
  );
}

export default Chat;
