import { clientCarouselImageData } from '../constants';
import './styles/client-logo.scss';

const ClientCarousel = () => {
  return (
    <div className="client-container">
      {clientCarouselImageData.map((imgSource, index) => (
        <img src={imgSource} key={index} height="100" width="100" />
      ))}
    </div>
  );
};

export default ClientCarousel;
