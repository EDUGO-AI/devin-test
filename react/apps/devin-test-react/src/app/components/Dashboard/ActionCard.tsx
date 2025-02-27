import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ActionCardProps {
  title: string;
  icon: React.ReactNode;
  illustration: string;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, icon, illustration, onClick }) => (
  <div 
    style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: '1px solid #e5e7eb',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    onClick={onClick}
  >
    <img src={illustration} alt="" style={{ height: '10rem', marginBottom: '1.5rem' }} />
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.5rem', 
      color: '#111827', 
      fontWeight: '500',
      fontSize: '0.95rem'
    }}>
      <span style={{ 
        width: '1.5rem', 
        height: '1.5rem', 
        backgroundColor: 'rgba(67, 83, 255, 0.1)', 
        borderRadius: '9999px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: '#4353FF' 
      }}>
        {icon}
      </span>
      <span>{title}</span>
    </div>
  </div>
);

export default ActionCard;
