import { useRef, useEffect } from 'react';
import imageCropper from '../../utils/imageCropper';
import { IImageCropperProps } from '../../interfaces';

const ImageCropper = (props: IImageCropperProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    imageCropper({ canvasRef, props });
  }, [props]);

  return <canvas ref={canvasRef} />;
};

export default ImageCropper;
