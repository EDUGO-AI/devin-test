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
    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center justify-between h-[250px] cursor-pointer" 
    onClick={onClick}
  >
    <img src={illustration} alt="" className="h-32 mb-4" />
    <div className="flex items-center gap-2 text-[#1a1a3f] font-medium">
      <span className="w-6 h-6 bg-[#1a1a3f] bg-opacity-10 rounded-full flex items-center justify-center text-[#1a1a3f]">
        {icon}
      </span>
      <span>{title}</span>
    </div>
  </div>
);

export default ActionCard;
