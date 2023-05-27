import ImageCropper from '../../helpers/ImageCropper';
import { Thumb } from './Details.styles';

const Image = ({ src, targetWidth }: { src: string; targetWidth: number }) => {
  return (
    <Thumb>
      <ImageCropper src={src} targetWidth={targetWidth} />
    </Thumb>
  );
};

export default Image;
