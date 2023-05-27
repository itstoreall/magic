import { ChangeEvent } from 'react';
import { SetImageData } from '../types';

const base64Converter =
  (setImageData: SetImageData) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageData(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

export default base64Converter;
