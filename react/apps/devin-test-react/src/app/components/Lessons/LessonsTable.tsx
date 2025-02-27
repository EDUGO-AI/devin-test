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
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderSpacing: 0 }}>
        <thead style={{ 
          backgroundColor: '#F9FAFB', 
          fontSize: '0.75rem', 
          color: '#4B5563', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          fontWeight: '600'
        }}>
          <tr>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>
              <Checkbox.Root 
                style={{ 
                  display: 'flex', 
                  height: '1.25rem', 
                  width: '1.25rem', 
                  appearance: 'none', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '0.25rem', 
                  border: '1px solid #D1D5DB', 
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#4353FF'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                aria-label="Select all rows"
              >
                <Checkbox.Indicator style={{ color: '#4353FF' }}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </th>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>My Student</th>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Session Duration</th>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Time</th>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Language</th>
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tools</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'white', borderTop: '1px solid #E5E7EB' }}>
          {lessons.map(lesson => (
            <tr key={lesson.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>
                <Checkbox.Root 
                  style={{ 
                    display: 'flex', 
                    height: '1.25rem', 
                    width: '1.25rem', 
                    appearance: 'none', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: '0.25rem', 
                    border: '1px solid #D1D5DB', 
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#4353FF'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                  checked={selectedRows[lesson.id] || false}
                  onCheckedChange={(checked) => handleSelectRow(lesson.id, checked === true)}
                  aria-label={`Select ${lesson.student.name}`}
                >
                  <Checkbox.Indicator style={{ color: '#4353FF' }}>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </td>
              <td style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ height: '2.5rem', width: '2.5rem', flexShrink: 0, marginRight: '0.75rem' }}>
                    <img 
                      style={{ height: '2.5rem', width: '2.5rem', borderRadius: '9999px', objectFit: 'cover' }} 
                      src={lesson.student.avatar} 
                      alt={lesson.student.name} 
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', color: '#111827' }}>{lesson.student.name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{lesson.student.email}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ height: '1.5rem', width: '1.5rem', borderRadius: '9999px', backgroundColor: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                    <svg style={{ height: '1rem', width: '1rem', color: '#4B5563' }} viewBox="0 0 24 24" fill="none">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {lesson.duration}
                </div>
              </td>
              <td style={{ padding: '1rem' }}>
                <span style={{ 
                  padding: '0.25rem 0.75rem', 
                  fontSize: '0.75rem', 
                  borderRadius: '9999px', 
                  backgroundColor: '#DEF7EC', 
                  color: '#03543F', 
                  fontWeight: '500',
                  display: 'inline-block',
                  letterSpacing: '0.025em',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}>
                  {lesson.status}
                </span>
              </td>
              <td style={{ padding: '1rem' }}>
                <div style={{ fontSize: '0.875rem', color: '#111827' }}>{lesson.dateTime.date}</div>
                <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{lesson.dateTime.time}</div>
              </td>
              <td style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src="/flags/en.svg" alt="English" style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.25rem' }} />
                    <span style={{ fontSize: '0.875rem' }}>{lesson.languages.from}</span>
                  </span>
                  <span style={{ margin: '0 0.5rem', fontSize: '0.875rem', color: '#6B7280' }}>to</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src="/flags/de.svg" alt="German" style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.25rem' }} />
                    <span style={{ fontSize: '0.875rem' }}>{lesson.languages.to}</span>
                  </span>
                </div>
              </td>
              <td style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: '#4353FF', 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.75rem', 
                      border: '1px solid #4353FF', 
                      borderRadius: '0.25rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(67, 83, 255, 0.05)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    onClick={() => onPrepareCall?.(lesson.id)}
                  >
                    Prepare call
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem', 
                      borderRadius: '9999px', 
                      backgroundColor: '#10B981', 
                      color: 'white', 
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.2s, background-color 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#0E9F6E';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#10B981';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={() => onStartCall?.(lesson.id)}
                    data-testid={`call-button-${lesson.id}`}
                    aria-label="Start call"
                  >
                    <svg style={{ height: '1rem', width: '1rem' }} viewBox="0 0 24 24" fill="none">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor" />
                    </svg>
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem', 
                      borderRadius: '9999px', 
                      backgroundColor: '#EF4444', 
                      color: 'white', 
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.2s, background-color 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#DC2626';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#EF4444';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={() => onCancelLesson?.(lesson.id)}
                    data-testid={`cancel-button-${lesson.id}`}
                    aria-label="Cancel lesson"
                  >
                    <svg style={{ height: '1rem', width: '1rem' }} viewBox="0 0 24 24" fill="none">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" />
                    </svg>
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem', 
                      borderRadius: '9999px', 
                      backgroundColor: '#F3F4F6', 
                      color: '#4B5563', 
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.2s, background-color 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#E5E7EB';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#F3F4F6';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    aria-label="More information"
                  >
                    <InfoCircledIcon style={{ height: '1rem', width: '1rem' }} />
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
