import React from 'react';

export const ActionCards: React.FC = () => {
  const handleCreateLesson = () => {
    console.log('Create lesson clicked');
    // Implementation would go here
  };

  const handleStartVideocall = () => {
    console.log('Start videocall clicked');
    // Implementation would go here
  };

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* Create Lesson Card */}
      <div 
        className="bg-white rounded-lg shadow p-6 cursor-pointer transition-all hover:shadow-md hover:translate-y-[-2px]"
        onClick={handleCreateLesson}
      >
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <span className="text-secondary text-2xl" role="img" aria-label="Create lesson icon">📝</span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-textDark">Create Lesson</h3>
            <p className="text-textMedium text-sm mt-1">Schedule a new lesson with a student</p>
          </div>
        </div>
      </div>

      {/* Start Videocall Card */}
      <div 
        className="bg-white rounded-lg shadow p-6 cursor-pointer transition-all hover:shadow-md hover:translate-y-[-2px]"
        onClick={handleStartVideocall}
      >
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <span className="text-secondary text-2xl" role="img" aria-label="Start videocall icon">📹</span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-textDark">Start Videocall</h3>
            <p className="text-textMedium text-sm mt-1">Begin a video session immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
