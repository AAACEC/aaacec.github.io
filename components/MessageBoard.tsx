import React from 'react';

interface MessageBoardProps {
  text: string;
}

const MessageBoard: React.FC<MessageBoardProps> = ({ text }) => {
  const repetitions = 12;

  const Content = () => (
    <div className="flex items-center flex-nowrap">
      {Array.from({ length: repetitions }).map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-xl font-bold uppercase tracking-widest mx-10 whitespace-nowrap">
            {text}
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-zinc-900 overflow-hidden py-3 flex relative select-none">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
      
      <div className="animate-marquee flex-shrink-0 flex items-center will-change-transform">
        <Content />
      </div>
      <div className="animate-marquee flex-shrink-0 flex items-center will-change-transform">
        <Content />
      </div>
    </div>
  );
};

export default MessageBoard;

