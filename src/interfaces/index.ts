// ----------------- ImageCropper

import { SetImageData } from '../types';

export interface IImageCropperProps {
  src: string;
  targetWidth: number;
}

export interface IImageCropperArgs {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  props: IImageCropperProps;
}

// ----------------- ImageUploader

export interface ImageUploaderProps {
  setImageData: SetImageData;
}

// ----------------- End
