import ImageCropper from '../../helpers/ImageCropper';
import { Thumb } from './Details.styles';

const Image = ({ src }: { src: string }) => {
  return (
    <Thumb>
      {/* <ImageCropper src={src} targetWidth={targetWidth} /> */}
      <img src={src} alt='' />
    </Thumb>
  );
};

export default Image;
