
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
    <div className="w-full bg-white min-h-screen">
      <div className="px-6 py-5 md:pl-64">
        {/* Dashboard header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome, Joaquin</p>
        </div>

        {/* Action cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Create Lesson Card */}
          <div 
            onClick={() => setIsCreateLessonOpen(true)}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center">
              <div className="bg-blue-50 rounded-full p-3 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M18 12H6" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Create</h3>
                <p className="text-gray-900">Lesson</p>
              </div>
            </div>
            <div className="w-1/2">
              <img src="/assets/create-lesson.png" alt="Create Lesson" className="w-full h-auto" />
            </div>
          </div>

          {/* Start Videocall Card */}
          <div 
            onClick={handleStartVideocall}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center">
              <div className="bg-blue-50 rounded-full p-3 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8L16 12L10 16V8Z" stroke="#4A55FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Start</h3>
                <p className="text-gray-900">Videocall</p>
              </div>
            </div>
            <div className="w-1/2">
              <img src="/assets/start-videocall.png" alt="Start Videocall" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Lessons Table */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-gray-900 font-medium">My upcoming lessons</h2>
              <span className="text-xs bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full">100 lessons</span>
            </div>
            
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 14L11.1 11.1" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-4 py-3 font-medium">
                    <div className="flex items-center gap-1">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>My Student</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10.6667L4 6.66669H12L8 10.6667Z" fill="#6B7280"/>
                      </svg>
                    </div>
                  </th>
                  <th className="px-4 py-3 font-medium">Session Duration</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Time</th>
                  <th className="px-4 py-3 font-medium">Language</th>
                  <th className="px-4 py-3 font-medium">Tools</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {lessons.map(lesson => (
                  <tr key={lesson.id} className="text-sm text-gray-900">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <input 
                          type="checkbox"
                          checked={selectedLessons[lesson.id] || false}
                          onChange={(e) => handleSelectLesson(lesson.id, e.target.checked)}
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <img 
                          src={lesson.student.avatar} 
                          alt={lesson.student.name}
                          className="w-8 h-8 rounded-full mr-3" 
                        />
                        <div>
                          <p className="font-medium">{lesson.student.name}</p>
                          <p className="text-xs text-gray-500">{lesson.student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 4V8L10.6667 9.33333" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {lesson.duration}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {lesson.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <p>{lesson.time.date}</p>
                      <p className="text-xs text-gray-500">{lesson.time.time}</p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7.5" fill="white" stroke="#E5E7EB"/>
                            <path d="M11.9999 8.66671H8.66659V12.0001H7.33325V8.66671H3.99992V7.33337H7.33325V4.00004H8.66659V7.33337H11.9999V8.66671Z" fill="#6B7280"/>
                          </svg>
                          {lesson.languages.from}
                        </span>
                        <span className="text-gray-400">to</span>
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7.5" fill="white" stroke="#E5E7EB"/>
                            <path d="M11.9999 8.66671H8.66659V12.0001H7.33325V8.66671H3.99992V7.33337H7.33325V4.00004H8.66659V7.33337H11.9999V8.66671Z" fill="#6B7280"/>
                          </svg>
                          {lesson.languages.to}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handlePrepareCall(lesson.id)}
                          className="inline-flex items-center px-3 py-1.5 border border-purple-300 text-xs font-medium rounded-md text-purple-700 bg-purple-50 hover:bg-purple-100"
                        >
                          Prepare call
                        </button>
                        <button className="p-1.5 text-green-500 bg-green-50 rounded-full hover:bg-green-100">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6499 14.5548 13.8204C14.4802 13.991 14.3705 14.1441 14.2328 14.2699C14.095 14.3956 13.9324 14.4913 13.7554 14.5504C13.5784 14.6095 13.3909 14.6308 13.2067 14.6133C11.1053 14.3904 9.08192 13.6894 7.27333 12.56C5.58463 11.5234 4.15587 10.0947 3.11933 8.40599C1.98533 6.58866 1.28397 4.55288 1.06667 2.44132C1.04916 2.25743 1.07037 2.07026 1.12926 1.89349C1.18814 1.71671 1.28361 1.55421 1.40908 1.41649C1.53455 1.27877 1.6873 1.16902 1.85748 1.09414C2.02767 1.01926 2.21169 0.980759 2.39733 0.981323H4.39733C4.71516 0.978053 5.02346 1.08953 5.26525 1.29454C5.50704 1.49954 5.66635 1.78313 5.71333 2.09466C5.80068 2.75326 5.96462 3.39835 6.2 4.01732C6.29998 4.2599 6.32856 4.52361 6.28261 4.7793C6.23667 5.03498 6.11803 5.27199 5.94 5.45199L5.06667 6.32532C6.03083 8.05933 7.4807 9.5092 9.21467 10.4733L10.088 9.59999C10.268 9.42196 10.505 9.30332 10.7607 9.25738C11.0164 9.21143 11.2801 9.24001 11.5227 9.33999C12.1416 9.57537 12.7867 9.73931 13.4453 9.82666C13.7602 9.8742 14.0466 10.0363 14.2522 10.2822C14.4578 10.5281 14.5671 10.8414 14.5613 11.1627L14.6667 11.28Z" stroke="#10B981" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="p-1.5 text-red-500 bg-red-50 rounded-full hover:bg-red-100">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4C13.3333 4 12.9173 3.33333 12.3333 3.33333C11.7493 3.33333 11.3333 4 11.3333 4M11.3333 4C11.3333 4 10.9173 3.33333 10.3333 3.33333C9.74931 3.33333 9.33331 4 9.33331 4M11.3333 4V12.6667M3.99998 4H9.33331M3.99998 12H12.6666M6.66665 12V8.66667M6.66665 4V8" stroke="#F05252" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="p-1.5 text-gray-500 bg-gray-50 rounded-full hover:bg-gray-100">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00002 3.33337V12.6667M8.00002 12.6667L12.6667 8.00004M8.00002 12.6667L3.33335 8.00004" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
