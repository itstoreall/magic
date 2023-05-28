import { NavLinkProps } from 'react-router-dom';
import { SetImageData } from '../types';

// ----------------- Themes

export interface Theme {
  background: string;
  backgroundBlur: string;
  backgroundHover: string;
  secondaryBackground: string;
  contrastBackground: string;
  contrastBackgroundHover: string;
  text: string;
  textInvert: string;
  button: string;
}

// ----------------- NavLinkProps

export interface GlobalStateProps {
  element: string;
  admin?: boolean;
}

// ----------------- NavLinkProps

export interface NavProps extends NavLinkProps, GlobalStateProps {}

// ----------------- ImageCropper

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
