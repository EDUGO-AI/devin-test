import React, { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

// Mock data for lessons
const mockLessons = [
  {
    id: '1',
    student: {
      name: 'Emma Johnson',
      email: 'emma.j@example.com',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    time: '2025-03-01T14:00:00Z',
    language: {
      from: 'English',
      to: 'Spanish',
      fromFlag: '🇺🇸',
      toFlag: '🇪🇸',
    },
  },
  {
    id: '2',
    student: {
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    duration: '30 minutes',
    status: 'Pending confirmation',
    time: '2025-03-02T10:30:00Z',
    language: {
      from: 'English',
      to: 'French',
      fromFlag: '🇺🇸',
      toFlag: '🇫🇷',
    },
  },
  {
    id: '3',
    student: {
      name: 'Sophia Rodriguez',
      email: 'sophia.r@example.com',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    time: '2025-03-03T16:15:00Z',
    language: {
      from: 'English',
      to: 'German',
      fromFlag: '🇺🇸',
      toFlag: '🇩🇪',
    },
  },
];

export const LessonsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLessons, setSelectedLessons] = useState<string[]>([]);

  // Filter lessons based on search term
  const filteredLessons = mockLessons.filter(
    (lesson) =>
      lesson.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle checkbox selection
  const handleCheckboxChange = (lessonId: string) => {
    setSelectedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  // Action handlers
  const handlePrepareCall = (lessonId: string) => {
    console.log(`Prepare call for lesson ${lessonId}`);
  };

  const handleStartCall = (lessonId: string) => {
    console.log(`Start call for lesson ${lessonId}`);
  };

  const handleCancelLesson = (lessonId: string) => {
    console.log(`Cancel lesson ${lessonId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-textDark">
            My upcoming lessons
            <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {filteredLessons.length}
            </span>
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search lessons..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-gray-400" role="img" aria-label="Search icon">🔍</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-bgLight">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <Checkbox.Root
                  className="flex h-4 w-4 appearance-none items-center justify-center rounded bg-white border border-gray-300 outline-none"
                  checked={
                    selectedLessons.length === filteredLessons.length &&
                    filteredLessons.length > 0
                  }
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedLessons(filteredLessons.map((lesson) => lesson.id));
                    } else {
                      setSelectedLessons([]);
                    }
                  }}
                >
                  <Checkbox.Indicator className="text-blue-500">✓</Checkbox.Indicator>
                </Checkbox.Root>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMedium uppercase tracking-wider">
                Student
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMedium uppercase tracking-wider">
                Duration
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMedium uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMedium uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMedium uppercase tracking-wider">
                Language
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMedium uppercase tracking-wider">
                Tools
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLessons.map((lesson) => (
              <tr key={lesson.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Checkbox.Root
                    className="flex h-4 w-4 appearance-none items-center justify-center rounded bg-white border border-gray-300 outline-none"
                    checked={selectedLessons.includes(lesson.id)}
                    onCheckedChange={() => handleCheckboxChange(lesson.id)}
                  >
                    <Checkbox.Indicator className="text-blue-500">✓</Checkbox.Indicator>
                  </Checkbox.Root>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={lesson.student.avatar}
                        alt={`${lesson.student.name}'s avatar`}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-textDark">
                        {lesson.student.name}
                      </div>
                      <div className="text-xs text-textMedium">
                        {lesson.student.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-textMedium">
                  {lesson.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      lesson.status === 'Confirmed by trainer'
                        ? 'bg-green-100 text-success'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {lesson.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-textMedium">
                  {formatDate(lesson.time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-1">{lesson.language.fromFlag}</span>
                    <span className="text-xs text-textMedium">{lesson.language.from}</span>
                    <span className="mx-2 text-gray-400">→</span>
                    <span className="mr-1">{lesson.language.toFlag}</span>
                    <span className="text-xs text-textMedium">{lesson.language.to}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <button
                            onClick={() => handlePrepareCall(lesson.id)}
                            className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 p-1 rounded"
                          >
                            <span role="img" aria-label="Prepare call icon">📝</span>
                          </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-900 text-white px-2 py-1 rounded text-xs"
                            sideOffset={5}
                          >
                            Prepare call
                            <Tooltip.Arrow className="fill-gray-900" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>

                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <button
                            onClick={() => handleStartCall(lesson.id)}
                            className="text-green-600 hover:text-green-900 bg-green-50 p-1 rounded"
                          >
                            <span role="img" aria-label="Start call icon">📞</span>
                          </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-gray-900 text-white px-2 py-1 rounded text-xs"
                            sideOffset={5}
                          >
                            Start call
                            <Tooltip.Arrow className="fill-gray-900" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>

                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button className="text-gray-600 hover:text-gray-900 bg-gray-50 p-1 rounded">
                          ⋯
                        </button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Portal>
                        <DropdownMenu.Content
                          className="bg-white rounded-md shadow-lg p-1 min-w-[160px]"
                          sideOffset={5}
                        >
                          <DropdownMenu.Item
                            className="text-sm text-red-600 hover:bg-red-50 rounded px-2 py-1 cursor-pointer outline-none"
                            onClick={() => handleCancelLesson(lesson.id)}
                          >
                            Cancel lesson
                          </DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LessonsTable;
