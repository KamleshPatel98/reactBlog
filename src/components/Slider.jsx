import Sliders from './Sliders'

// carousel
import Carousel from 'react-bootstrap/Carousel';

export default function Slider({images}){
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index} interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption>
                        <h3>{`Slide ${index + 1}`}</h3>
                        <p>{`This is slide ${index + 1}`}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}