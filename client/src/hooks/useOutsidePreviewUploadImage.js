import { useEffect } from 'react';

const useOutsidePreviewUploadImage = (PreviewUploadImage, callbackFunction) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        PreviewUploadImage.current &&
        !PreviewUploadImage.current.contains(event.target) &&
        callbackFunction
      ) {
        callbackFunction();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [PreviewUploadImage, callbackFunction]);
};

export default useOutsidePreviewUploadImage;
