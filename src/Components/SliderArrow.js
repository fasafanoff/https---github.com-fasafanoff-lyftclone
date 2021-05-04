import React from 'react';

const SliderArrow = ({ onClick, isLeft }) => {
    return (
      <div
        onClick={onClick}
        className={`${isLeft ? "slider__leftarrow" : "slider__rightarrow"}`}
      >
        <div className="slider__arrow">
          <svg
            viewBox="0 0 64 64"
            class="slider__arrowsvg"
            style={{ transform: `rotate(${isLeft ? "0" : "180"}deg)` }}
          >
            <g>
              <path d="M38.49 20.944l-2.06-2.18L22.234 32.19l14.023 13.3 2.065-2.176-11.725-11.121z"></path>
            </g>
          </svg>
        </div>
      </div>
    );
}

export default SliderArrow;
