import { useState, useCallback } from 'react';

export const usePartnersModal = () => {
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);

  const openPartnersModal = useCallback(() => {
    setIsPartnersModalOpen(true);
  }, []);

  const closePartnersModal = useCallback(() => {
    setIsPartnersModalOpen(false);
  }, []);

  return {
    isPartnersModalOpen,
    openPartnersModal,
    closePartnersModal
  };
};

export default usePartnersModal;
