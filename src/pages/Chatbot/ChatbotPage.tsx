import React, { useState } from 'react';
import Header from '../../components/Chatbot/Header';
import ChatArea from '../../components/Chatbot/ChatArea';
import InputBox from '../../components/Chatbot/InputBox';
import PerfumeTagList from '../../components/Chatbot/PerfumeTagList';

// ChatbotPage.tsx
export interface Message {
  type: "user" | "bot";
  text: string;
}

const perfumeTags = [
  "#오늘같은날씨어떤향수뿌릴까?",
  "#비온뒤새벽에나는향같은향수",
  "#향수의역사"
];

const ChatbotPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "복잡하게 찾지 말고 한 번에 검색을 통하여 원하는 향수를 찾아보세요!\n저는 지하주차장 냄새가 은근 괜찮더라구요. 지하주차장 냄새랑 비슷한 향수를 찾곤 합니다 :)  " },
    //{ type: "user", text: "메니큐어 냄새가 좋던데, 메니큐어 냄새랑 비슷한 향수를 추천해줘." },
    //{ type: "bot", text: "메니큐어 향을 좋아하는 분들을 위한 향수 추천 요약..." },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
    // 실제 챗봇 응답 로직 추가 필요
    setIsLoading(true);
    // 예시용 딜레이 응답
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "당연하죠! 우선, 어떤 향을 좋아하는지 알려주세요!" },
      ]);
      setIsLoading(false);
    }, 2500); // 2초 후 응답
  };

  const hasUserMessage = messages.some(msg => msg.type === "user");
      


  return (
    <div className="min-w-[375px] w-120 h-full bg-main-10 flex flex-col font-[Pretandard]">
      <div className='pb-20'>
        <Header />
        <ChatArea messages={messages} isLoading={isLoading} />
      </div>
      {!hasUserMessage && <PerfumeTagList tags={perfumeTags} />}
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatbotPage;