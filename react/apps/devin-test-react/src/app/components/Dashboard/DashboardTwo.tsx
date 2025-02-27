import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const DashboardTwo: React.FC = () => {
  const [isCreateLessonOpen, setIsCreateLessonOpen] = useState(false);
  const [selectedLessons, setSelectedLessons] = useState<Record<string, boolean>>({});

  const handleSelectLesson = (id: string, selected: boolean) => {
    setSelectedLessons(prev => ({
      ...prev,
      [id]: selected
    }));
  };

  const handleCreateLesson = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Create lesson form submitted');
    setIsCreateLessonOpen(false);
  };

  const handleStartVideocall = () => {
    console.log('Start videocall clicked');
  };

  const handlePrepareCall = (id: string) => {
    console.log('Prepare call for lesson:', id);
  };

  const lessons = [
    {
      id: '1',
      student: {
        name: 'August Smith',
        email: 'august.smith@gmail.com',
        avatar: '/assets/avatar.png'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      time: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    },
    {
      id: '2',
      student: {
        name: 'Gino Gutierrez',
        email: 'gino.gutierrez@gmail.com',
        avatar: '/assets/avatar.png'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      time: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    },
    {
      id: '3',
      student: {
        name: 'Olivia Rhye',
        email: 'olivia@gmail.com',
        avatar: '/assets/avatar.png'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      time: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    },
    {
      id: '4',
      student: {
        name: 'August Smith',
        email: 'august.smith@gmail.com',
        avatar: '/assets/avatar.png'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      time: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    },
    {
      id: '5',
      student: {
        name: 'Gino Gutierrez',
        email: 'gino.gutierrez@gmail.com',
        avatar: '/assets/avatar.png'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      time: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    },
    {
      id: '6',
      student: {
        name: 'Olivia Rhye',
        email: 'olivia@gmail.com',
        avatar: '/assets/avatar.png'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      time: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    }
  ];

  return (
    <div className="w-full p-6">
      {/* Header section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-base text-gray-600">Welcome, <span className="text-gray-900">Joaquin</span></p>
      </div>

      {/* Action cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Create Lesson card */}
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 flex items-center">
          <div className="flex-1 p-6">
            <h2 className="text-lg font-medium mb-2">Create<br />Lesson</h2>
            <button 
              onClick={() => setIsCreateLessonOpen(true)}
              className="mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="hidden sm:block p-4">
            <img src="/assets/create-lesson.png" alt="Create Lesson" className="w-auto h-24" />
          </div>
        </div>

        {/* Start Videocall card */}
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 flex items-center">
          <div className="flex-1 p-6">
            <h2 className="text-lg font-medium mb-2">Start<br />Videocall</h2>
            <button 
              onClick={handleStartVideocall}
              className="mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8L16 12L10 16V8Z" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="hidden sm:block p-4">
            <img src="/assets/start-videocall.png" alt="Start Videocall" className="w-auto h-24" />
          </div>
        </div>
      </div>

      {/* Upcoming lessons section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-base font-medium">My upcoming lessons</h2>
            <span className="text-xs text-gray-500">100 lessons</span>
          </div>
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="text" className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search" />
          </div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 text-xs font-medium text-gray-500 uppercase">
          <div className="col-span-1">My Student</div>
          <div className="col-span-1 text-center">Session Duration</div>
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-1 text-center">Time</div>
          <div className="col-span-1 text-center">Language</div>
          <div className="col-span-1 text-center">Tools</div>
        </div>

        {/* Table rows */}
        <div className="divide-y divide-gray-200">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="grid grid-cols-6 gap-4 p-4 hover:bg-gray-50 transition-colors duration-150">
              {/* Student column */}
              <div className="col-span-1 flex items-center">
                <img src={lesson.student.avatar} alt={lesson.student.name} className="w-8 h-8 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{lesson.student.name}</p>
                  <p className="text-xs text-gray-500">{lesson.student.email}</p>
                </div>
              </div>

              {/* Duration column */}
              <div className="col-span-1 flex items-center justify-center">
                <div className="flex items-center text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm">{lesson.duration}</span>
                </div>
              </div>

              {/* Status column */}
              <div className="col-span-1 flex items-center justify-center">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  {lesson.status}
                </span>
              </div>

              {/* Time column */}
              <div className="col-span-1 flex flex-col items-center justify-center">
                <p className="text-sm text-gray-900">{lesson.time.date}</p>
                <p className="text-xs text-gray-500">{lesson.time.time}</p>
              </div>

              {/* Language column */}
              <div className="col-span-1 flex items-center justify-center space-x-2">
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
              <div className="col-span-1 flex items-center justify-center space-x-2">
                <button onClick={() => handlePrepareCall(lesson.id)} className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-md">
                  Prepare call
                </button>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Create Lesson Dialog */}
      <Dialog.Root open={isCreateLessonOpen} onOpenChange={setIsCreateLessonOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-xl font-semibold">New Lesson</Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-500 hover:text-gray-700">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </div>
            <form onSubmit={handleCreateLesson}>
              <div className="mb-4">
                <label htmlFor="student" className="block text-sm font-medium text-gray-700 mb-1">Student</label>
                <select id="student" name="student" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="1">August Smith</option>
                  <option value="2">Gino Gutierrez</option>
                  <option value="3">Olivia Rhye</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                <input type="datetime-local" id="datetime" name="datetime" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select id="duration" name="duration" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="30">30 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90 minutes</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <Dialog.Close asChild>
                  <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Cancel
                  </button>
                </Dialog.Close>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Create Lesson
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default DashboardTwo;