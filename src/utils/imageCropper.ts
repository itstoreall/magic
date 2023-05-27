import { IImageCropperArgs } from '../interfaces';

const imageCropper = (args: IImageCropperArgs) => {
  const { src, targetWidth } = args.props;

  const canvas = args.canvasRef.current;
  const ctx = canvas?.getContext('2d');
  const image = new Image();

  image.src = src;

  image.onload = () => {
    const aspectRatio = image.width / image.height;
    const targetHeight = targetWidth / aspectRatio;
    const offsetY = 0;

    if (canvas && ctx) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      ctx.drawImage(
        image,
        0,
        offsetY,
        image.width,
        image.height,
        0,
        0,
        targetWidth,
        targetHeight
      );
    }
  };
};

export default imageCropper;
