import React from 'react';

export interface StartVideocallCardProps {
  onClick: () => void;
}

export const StartVideocallCard: React.FC<StartVideocallCardProps> = ({ onClick }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex items-center relative">
      <div className="flex-1 p-6">
        <h2 className="text-[28px] font-semibold text-[#101828] mb-2">Start<br />Videocall</h2>
        <button 
          onClick={onClick}
          className="mt-2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm hover:shadow-md border-2 border-[#4A55FD] transition-all duration-150"
          aria-label="Start a videocall"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 8L16 12L10 16V8Z" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="block p-4 relative z-10">
        <img src="/assets/start-videocall.png" alt="Start Videocall" className="w-auto h-36" />
      </div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#EEF6FF] to-white -z-0"></div>
    </div>
  );
};

export default StartVideocallCard;
