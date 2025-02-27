import { useState } from 'react';

export interface UsePrepareCallOptions {
  onCancel?: () => void;
  onProceed?: () => void;
}

export const usePrepareCall = (options: UsePrepareCallOptions = {}) => {
  const [open, setOpen] = useState(false);

  const prepareCall = {
    open,
    onOpenChange: setOpen,
    onCancel: options.onCancel,
    onProceed: options.onProceed,
  };

  return {
    open,
    setOpen,
    prepareCall,
  };
};
