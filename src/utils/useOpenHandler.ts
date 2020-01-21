import { useCallback, useState } from 'react';

const useOpenHandler = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return [open, onOpen, onClose] as const;
};

export default useOpenHandler;
