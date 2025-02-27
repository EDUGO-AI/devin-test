import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const PrepareCallTest: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  const handleCancel = () => {
    console.log('Cancelled');
    setOpen(false);
  };
  
  const handleProceed = () => {
    console.log('Proceeded');
    setOpen(false);
  };

  return (
    <div className="p-4">
      <button 
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-secondary text-white rounded-md"
      >
        Open Prepare Call Dialog
      </button>
      
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 max-w-md w-full shadow-lg z-50 flex flex-col items-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2C10.6868 2 9.38647 2.25854 8.1731 2.76123C6.95996 3.26367 5.85742 4.00024 4.92896 4.92896C3.26267 6.59552 2.25 8.88 2.05 11.38" stroke="#4353FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17C2 17.5523 2.44772 18 3 18H5C5.55228 18 6 17.5523 6 17V14C6 13.4477 5.55228 13 5 13H3C2.44772 13 2 13.4477 2 14V17ZM8 17C8 17.5523 8.44772 18 9 18H11C11.5523 18 12 17.5523 12 17V10C12 9.44772 11.5523 9 11 9H9C8.44772 9 8 9.44772 8 10V17ZM14 17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V6C18 5.44772 17.5523 5 17 5H15C14.4477 5 14 5.44772 14 6V17ZM20 17C20 17.5523 20.4477 18 21 18H23C23.5523 18 24 17.5523 24 17V2C24 1.44772 23.5523 1 23 1H21C20.4477 1 20 1.44772 20 2V17Z" fill="#4353FF"/>
              </svg>
            </div>
            <Dialog.Title className="text-xl font-semibold text-center mb-2">Prepare call</Dialog.Title>
            <Dialog.Description className="text-gray-600 text-center mb-4">
              You've used up all your preparation time. You can preview the session, but you are unable to interact with session content.
            </Dialog.Description>
            <p className="text-gray-700 font-medium text-center mb-6">Do you want to proceed?</p>
            <div className="flex gap-4 w-full">
              <button 
                onClick={handleCancel}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
              >
                Cancel
              </button>
              <button 
                onClick={handleProceed}
                className="flex-1 py-2 px-4 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary/50"
              >
                Proceed
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default PrepareCallTest;
