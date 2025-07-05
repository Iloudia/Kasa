import { useState } from 'react';
import './Carousel.css';

function Carousel({ pictures }) {
  const total = pictures.length;
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="gallery">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="gallery-img"
      />

      {total > 1 && (
        <>
          <button className="arrow left" onClick={prev}>‹</button>
          <button className="arrow right" onClick={next}>›</button>
          <span className="counter">
            {index + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;