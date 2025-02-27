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
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow" 
    onClick={onClick}
  >
    <img src={illustration} alt="" className="h-32 mb-4" />
    <div className="flex items-center gap-2 text-primary font-medium">
      <span className="w-6 h-6 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
        {icon}
      </span>
      <span>{title}</span>
    </div>
  </div>
);

export default ActionCard;
