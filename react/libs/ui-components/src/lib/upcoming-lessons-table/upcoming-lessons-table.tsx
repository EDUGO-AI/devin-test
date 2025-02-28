import React, { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export interface Student {
  name: string;
  email: string;
  avatar: string;
}

export interface DateTime {
  date: string;
  time: string;
}

export interface Language {
  from: string;
  to: string;
}

export interface Lesson {
  id: string;
  student: Student;
  duration: string;
  status: string;
  dateTime: DateTime;
  languages: Language;
}

export interface UpcomingLessonsTableProps {
  lessons: Lesson[];
  onSelectRow?: (id: string, selected: boolean) => void;
  onPrepareCall?: (id: string) => void;
  onStartCall?: (id: string) => void;
  onCancelLesson?: (id: string) => void;
  onInfo?: (id: string) => void;
}

export const UpcomingLessonsTable: React.FC<UpcomingLessonsTableProps> = ({
  lessons,
  onSelectRow,
  onPrepareCall,
  onStartCall,
  onCancelLesson,
  onInfo
}) => {
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  const handleSelectRow = (id: string, checked: boolean) => {
    setSelectedRows(prev => ({
      ...prev,
      [id]: checked
    }));
    
    if (onSelectRow) {
      onSelectRow(id, checked);
    }
  };

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm">
      {/* Table header */}
      <div className="bg-[#f2f4f7] py-3 px-6 grid grid-cols-6 gap-4 text-xs text-[#667087] uppercase tracking-wider font-extrabold border-b border-gray-200">
        <div className="flex items-center">
          <Checkbox.Root 
            className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white hover:border-indigo-500 transition-colors"
            aria-label="Select all rows"
          >
            <Checkbox.Indicator className="text-indigo-500">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className="ml-3">MY STUDENT</span>
        </div>
        <div className="text-center">SESSION DURATION</div>
        <div className="text-center">STATUS</div>
        <div className="text-center">TIME</div>
        <div className="text-center">LANGUAGE</div>
        <div className="text-center">TOOLS</div>
      </div>

      {/* Table rows */}
      <div>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="border-b border-black border-opacity-10 last:border-b-0">
            <div className="py-6 px-6 grid grid-cols-6 gap-4 items-center bg-[#F9FAFB]">
              {/* Checkbox and Student */}
              <div className="flex items-center">
                <Checkbox.Root 
                  className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white hover:border-indigo-500 transition-colors"
                  checked={selectedRows[lesson.id] || false}
                  onCheckedChange={(checked) => handleSelectRow(lesson.id, checked === true)}
                  aria-label={`Select ${lesson.student.name}`}
                >
                  <Checkbox.Indicator className="text-indigo-500">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="flex items-center ml-3">
                  <div className="h-10 w-10 flex-shrink-0 mr-3">
                    <img 
                      className="h-10 w-10 rounded-full object-cover" 
                      src={lesson.student.avatar} 
                      alt={lesson.student.name} 
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{lesson.student.name}</div>
                    <div className="text-sm text-gray-500">{lesson.student.email}</div>
                  </div>
                </div>
              </div>

              {/* Session Duration */}
              <div className="flex items-center justify-center">
                <span className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm">{lesson.duration}</span>
              </div>

              {/* Status */}
              <div className="flex justify-center">
                <span className="px-3 py-1 text-xs rounded-full bg-[#12B76A] text-white font-medium inline-block">
                  Confirmed by trainer
                </span>
              </div>

              {/* Time */}
              <div className="text-center">
                <div className="text-sm text-gray-900">{lesson.dateTime.date}</div>
                <div className="text-sm text-gray-500">{lesson.dateTime.time}</div>
              </div>

              {/* Language */}
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center">
                  <div className="h-5 w-5 rounded-full overflow-hidden mr-1 flex-shrink-0 border border-gray-200">
                    <img src="/flags/en.svg" alt="English" className="h-full w-full object-cover" />
                  </div>
                  <span className="text-sm">{lesson.languages.from}</span>
                </div>
                <span className="mx-2 text-sm text-gray-500">to</span>
                <div className="inline-flex items-center">
                  <div className="h-5 w-5 rounded-full overflow-hidden mr-1 flex-shrink-0 border border-gray-200">
                    <img src="/flags/de.svg" alt="German" className="h-full w-full object-cover" />
                  </div>
                  <span className="text-sm">{lesson.languages.to}</span>
                </div>
              </div>

              {/* Tools */}
              <div className="flex items-center justify-center space-x-3">
                <button 
                  className="px-3 py-1 text-xs font-medium rounded-md border border-[#7F56D9] text-[#7F56D9] hover:bg-indigo-50 transition-colors"
                  onClick={() => onPrepareCall?.(lesson.id)}
                >
                  Prepare call
                </button>
                <div className="flex items-center space-x-2">
                  <button 
                    className="h-8 w-8 rounded-full bg-[#75E0A7] text-white hover:bg-green-600 transition-colors flex items-center justify-center"
                    onClick={() => onStartCall?.(lesson.id)}
                    aria-label="Start call"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor" />
                    </svg>
                  </button>
                  <button 
                    className="h-8 w-8 rounded-full bg-[#F04438] text-white hover:bg-red-600 transition-colors flex items-center justify-center"
                    onClick={() => onCancelLesson?.(lesson.id)}
                    aria-label="Cancel lesson"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" />
                    </svg>
                  </button>
                  <button 
                    className="h-8 w-8 rounded-full bg-[#F9FAFB] text-[#98A2B3] hover:bg-gray-300 transition-colors flex items-center justify-center"
                    onClick={() => onInfo?.(lesson.id)}
                    aria-label="More information"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingLessonsTable;
