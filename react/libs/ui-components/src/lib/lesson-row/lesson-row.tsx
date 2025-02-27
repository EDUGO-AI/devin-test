import React from 'react';

export interface LessonRowProps {
  lesson: {
    id: string;
    student: {
      name: string;
      email: string;
      avatar: string;
    };
    duration: string;
    status: string;
    time: {
      date: string;
      time: string;
    };
    languages: {
      from: string;
      to: string;
    };
  };
  onPrepareCall: (id: string) => void;
  onCall: (id: string) => void;
  onCancel: (id: string) => void;
  onInfo: (id: string) => void;
}

export const LessonRow: React.FC<LessonRowProps> = ({ 
  lesson, 
  onPrepareCall,
  onCall,
  onCancel,
  onInfo
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-150">
      {/* Student column */}
      <div className="flex items-center">
        <img src={lesson.student.avatar} alt={lesson.student.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-900">{lesson.student.name}</p>
          <p className="text-xs text-gray-500">{lesson.student.email}</p>
        </div>
      </div>

      {/* Duration column */}
      <div className="flex items-center text-gray-500">
        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-sm">{lesson.duration}</span>
      </div>

      {/* Status column */}
      <div className="flex items-center">
        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
          {lesson.status}
        </span>
      </div>

      {/* Time column */}
      <div className="flex flex-col items-start">
        <p className="text-sm text-gray-900">{lesson.time.date}</p>
        <p className="text-xs text-gray-500">{lesson.time.time}</p>
      </div>

      {/* Language column */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 mr-1">
            <span className="text-xs">🇬🇧</span>
          </span>
          <span className="text-sm">{lesson.languages.from}</span>
        </div>
        <span className="text-gray-400">to</span>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 mr-1">
            <span className="text-xs">🇩🇪</span>
          </span>
          <span className="text-sm">{lesson.languages.to}</span>
        </div>
      </div>

      {/* Tools column */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => onPrepareCall(lesson.id)} 
          className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-md"
        >
          Prepare call
        </button>
        <button 
          onClick={() => onCall(lesson.id)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
        </button>
        <button 
          onClick={() => onCancel(lesson.id)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <button 
          onClick={() => onInfo(lesson.id)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
