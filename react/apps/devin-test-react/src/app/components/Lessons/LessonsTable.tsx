import React, { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import Button from '../UI/Button';

interface Student {
  name: string;
  email: string;
  avatar: string;
}

interface DateTime {
  date: string;
  time: string;
}

interface Language {
  from: string;
  to: string;
}

interface Lesson {
  id: string;
  student: Student;
  duration: string;
  status: string;
  dateTime: DateTime;
  languages: Language;
}

interface LessonsTableProps {
  lessons: Lesson[];
  onSelectRow?: (id: string, selected: boolean) => void;
  onPrepareCall?: (id: string) => void;
  onStartCall?: (id: string) => void;
  onCancelLesson?: (id: string) => void;
}

const LessonsTable: React.FC<LessonsTableProps> = ({
  lessons,
  onSelectRow,
  onPrepareCall,
  onStartCall,
  onCancelLesson
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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-table-header text-xs uppercase font-medium text-gray-500 tracking-wider">
          <tr>
            <th className="px-4 py-3 text-left">
              <Checkbox.Root 
                className="flex h-4 w-4 appearance-none items-center justify-center rounded border border-gray-300 bg-white"
                aria-label="Select all rows"
              >
                <Checkbox.Indicator className="text-[#1a1a3f]">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </th>
            <th className="px-4 py-3 text-left">My Student</th>
            <th className="px-4 py-3 text-left">Session Duration</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Time</th>
            <th className="px-4 py-3 text-left">Language</th>
            <th className="px-4 py-3 text-left">Tools</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-border-light">
          {lessons.map(lesson => (
            <tr key={lesson.id} className="border-b border-border-light hover:bg-hover-blue">
              <td className="px-4 py-4">
                <Checkbox.Root 
                  className="flex h-4 w-4 appearance-none items-center justify-center rounded border border-gray-300 bg-white"
                  checked={selectedRows[lesson.id] || false}
                  onCheckedChange={(checked) => handleSelectRow(lesson.id, checked === true)}
                  aria-label={`Select ${lesson.student.name}`}
                >
                  <Checkbox.Indicator className="text-[#1a1a3f]">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 mr-3">
                    <img 
                      className="h-10 w-10 rounded-full object-cover" 
                      src={lesson.student.avatar} 
                      alt={lesson.student.name} 
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-dark">{lesson.student.name}</div>
                    <div className="text-xs text-gray-500">{lesson.student.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {lesson.duration}
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-success">
                  {lesson.status}
                </span>
              </td>
              <td className="px-4 py-4">
                <div className="text-sm text-text-dark">{lesson.dateTime.date}</div>
                <div className="text-xs text-gray-500">{lesson.dateTime.time}</div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="inline-flex items-center gap-1">
                    <img src="/flags/en.svg" alt="English" className="w-5 h-5" />
                    <span>{lesson.languages.from}</span>
                  </span>
                  <span className="text-xs text-gray-500 mx-1">to</span>
                  <span className="inline-flex items-center gap-1">
                    <img src="/flags/de.svg" alt="German" className="w-5 h-5" />
                    <span>{lesson.languages.to}</span>
                  </span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onPrepareCall?.(lesson.id)}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Prepare call
                  </Button>
                  <button 
                    className="p-2 rounded-full bg-success text-white hover:bg-success/90"
                    onClick={() => onStartCall?.(lesson.id)}
                    data-testid={`call-button-${lesson.id}`}
                    aria-label="Start call"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor" />
                    </svg>
                  </button>
                  <button 
                    className="p-2 rounded-full bg-danger text-white hover:bg-danger/90"
                    onClick={() => onCancelLesson?.(lesson.id)}
                    data-testid={`cancel-button-${lesson.id}`}
                    aria-label="Cancel lesson"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" />
                    </svg>
                  </button>
                  <button 
                    className="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300"
                    aria-label="More information"
                  >
                    <InfoCircledIcon className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonsTable;
