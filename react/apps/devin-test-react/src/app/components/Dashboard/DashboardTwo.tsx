import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { UpcomingLessonsTable, CreateLessonCard, StartVideocallCard } from '@edugo/ui-components';

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

  const handleCall = (id: string) => {
    console.log('Call lesson:', id);
  };

  const handleCancel = (id: string) => {
    console.log('Cancel lesson:', id);
  };

  const handleInfo = (id: string) => {
    console.log('Info for lesson:', id);
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
        <CreateLessonCard onClick={() => setIsCreateLessonOpen(true)} />
        <StartVideocallCard onClick={handleStartVideocall} />
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

        {/* Upcoming lessons table */}
        <UpcomingLessonsTable
          lessons={lessons.map(lesson => ({
            id: lesson.id,
            student: lesson.student,
            duration: lesson.duration,
            status: lesson.status,
            dateTime: {
              date: lesson.time.date,
              time: lesson.time.time
            },
            languages: lesson.languages
          }))}
          onSelectRow={handleSelectLesson}
          onPrepareCall={handlePrepareCall}
          onStartCall={handleCall}
          onCancelLesson={handleCancel}
          onInfo={handleInfo}
        />
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
                <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-1">Date and Time</label>
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
