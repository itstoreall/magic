import { ChangeEvent } from 'react';
import { SetImageData } from '../types';

const base64Converter =
  (setImageData: SetImageData) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (!context) {
            console.error(
              'Error in base64Converter: Canvas context is not supported'
            );
            return;
          }

          const maxWidth = 900;
          const scaleFactor = maxWidth / img.width;
          const newWidth = img.width * scaleFactor;
          const newHeight = img.height * scaleFactor;

          canvas.width = newWidth;
          canvas.height = newHeight;

          context.drawImage(img, 0, 0, newWidth, newHeight);

          const base64String = canvas.toDataURL(file.type, 0.7); // 0.8 - normal quality
          setImageData(base64String);
        };
      };

      reader.readAsDataURL(file);
    }
  };

export default base64Converter;
