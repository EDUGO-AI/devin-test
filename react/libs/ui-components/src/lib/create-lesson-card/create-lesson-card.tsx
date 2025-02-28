import React from 'react';

export interface CreateLessonCardProps {
  onClick: () => void;
}

export const CreateLessonCard: React.FC<CreateLessonCardProps> = ({ onClick }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex items-center relative">
      <div className="flex-1 p-6">
        <h2 className="text-[28px] font-semibold text-[#101828] mb-2">Create<br />Lesson</h2>
        <button 
          onClick={onClick}
          className="mt-2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm hover:shadow-md border-2 border-[#2F3790] transition-all duration-150"
          aria-label="Create new lesson"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="#2F3790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="block p-4 relative z-10">
        <img src="/assets/create-lesson.png" alt="Create Lesson" className="w-auto h-36" />
      </div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#EDF2FE] to-white -z-0"></div>
    </div>
  );
};

export default CreateLessonCard;
