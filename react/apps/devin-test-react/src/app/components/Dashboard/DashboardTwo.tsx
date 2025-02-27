import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, PlusIcon, PlayIcon } from '@radix-ui/react-icons';
import Layout from '../Layout/Layout';
import ActionCard from './ActionCard';
import LessonsTable from '../Lessons/LessonsTable';
import Button from '../UI/Button';

// Remove the import of dashboard-styles.css as it's causing issues

// Mock data for lessons
const mockLessons = [
  {
    id: '1',
    student: {
      name: 'August Smith',
      email: 'august.smith@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
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
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
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
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
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
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
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
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
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
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
      date: '23 Dec, 2024',
      time: 'Mon, 12:45'
    },
    languages: {
      from: 'English',
      to: 'German'
    }
  },
  {
    id: '7',
    student: {
      name: 'August Smith',
      email: 'august.smith@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    duration: '30 minutes',
    status: 'Confirmed by trainer',
    dateTime: {
      date: '23 Dec, 2024',
      time: 'Mon, 12:45'
    },
    languages: {
      from: 'English',
      to: 'German'
    }
  }
];

const DashboardTwo: React.FC = () => {
  const [isCreateLessonOpen, setIsCreateLessonOpen] = useState(false);
  const [, setSelectedLessons] = useState<Record<string, boolean>>({});

  const handleSelectLesson = (id: string, selected: boolean) => {
    setSelectedLessons(prev => ({
      ...prev,
      [id]: selected
    }));
  };

  const handlePrepareCall = (id: string) => {
    console.log('Prepare call for lesson:', id);
  };

  const handleStartCall = (id: string) => {
    console.log('Start call for lesson:', id);
  };

  const handleCancelLesson = (id: string) => {
    console.log('Cancel lesson:', id);
  };

  const handleCreateLesson = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Create lesson form submitted');
    setIsCreateLessonOpen(false);
  };

  const handleStartVideocall = () => {
    console.log('Start videocall clicked');
  };

  return (
    <Layout activeNavItem="dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: '#111827', 
          marginBottom: '0.25rem',
          letterSpacing: '-0.025em'
        }}>Dashboard</h1>
        <p style={{ 
          color: '#4B5563', 
          fontSize: '0.95rem'
        }}>Welcome, Joaquin</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '2rem', 
        marginBottom: '2.5rem',
        maxWidth: '800px'
      }}>
        <Dialog.Root open={isCreateLessonOpen} onOpenChange={setIsCreateLessonOpen}>
          <Dialog.Trigger asChild>
            <div>
              <ActionCard
                title="Create Lesson"
                icon={<PlusIcon />}
                illustration="/assets/create-lesson.svg"
                onClick={() => setIsCreateLessonOpen(true)}
              />
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[500px] max-w-[90vw] max-h-[85vh] overflow-y-auto">
              <Dialog.Title className="text-xl font-semibold mb-4">New Lesson</Dialog.Title>
              <Dialog.Description className="text-gray-600 mb-6">
                Create a new lesson for your students.
              </Dialog.Description>
              
              <form onSubmit={handleCreateLesson}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select a student</option>
                      <option value="1">August Smith</option>
                      <option value="2">Gino Gutierrez</option>
                      <option value="3">Olivia Rhye</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date &amp; Time</label>
                    <input type="datetime-local" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
                    <div className="flex gap-2">
                      <select className="flex-1 p-2 border border-gray-300 rounded-md">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                      </select>
                      <span className="flex items-center">to</span>
                      <select className="flex-1 p-2 border border-gray-300 rounded-md">
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="pt">Portuguese</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md h-24" placeholder="Add any notes for this lesson..."></textarea>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" type="button" onClick={() => setIsCreateLessonOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Lesson</Button>
                </div>
              </form>
              
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        
        <ActionCard
          title="Start Videocall"
          icon={<PlayIcon />}
          illustration="/assets/start-videocall.svg"
          onClick={handleStartVideocall}
        />
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '0.5rem', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
        padding: '1.5rem', 
        marginBottom: '2rem',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600', 
              color: '#111827',
              marginBottom: '0.25rem'
            }}>My upcoming lessons</h2>
            <div style={{ 
              fontSize: '0.875rem', 
              color: '#6B7280'
            }}>100 lessons</div>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search"
              style={{ 
                paddingLeft: '2.5rem', 
                paddingRight: '1rem', 
                paddingTop: '0.5rem', 
                paddingBottom: '0.5rem', 
                border: '1px solid #E5E7EB', 
                borderRadius: '9999px', 
                width: '300px',
                fontSize: '0.875rem',
                outline: 'none',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#4353FF'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
            />
            <svg
              style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#9CA3AF' 
              }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <LessonsTable
          lessons={mockLessons}
          onSelectRow={handleSelectLesson}
          onPrepareCall={handlePrepareCall}
          onStartCall={handleStartCall}
          onCancelLesson={handleCancelLesson}
        />
      </div>
    </Layout>
  );
};

export default DashboardTwo;
