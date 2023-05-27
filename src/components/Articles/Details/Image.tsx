import { Thumb } from './Details.styles';

const Image = ({ src }: { src: string }) => {
  return (
    <Thumb>
      <img src={src} alt='' />
    </Thumb>
  );
};

export default Image;
