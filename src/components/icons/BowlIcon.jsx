import PropTypes from 'prop-types';

export default function BowlIcon({
  width = 27.789,
  height = 27.166,
}) {
  return (
    <svg
      id="Bowl"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27.789 27.166"
    >
      <g
        id="Rectangle_31"
        data-name="Rectangle 31"
        transform="translate(8.15 23.544)"
        fill="#ebe3cb"
        stroke="#5c5448"
        strokeWidth="1"
      >
        <rect width="10.867" height="3.622" stroke="none" />
        <rect x="0.5" y="0.5" width="9.867" height="2.622" fill="none" />
      </g>
      <path
        id="Path_327"
        data-name="Path 327"
        d="M96.233,965.965l8.326-7.438,3.219,3.441-6.106,6.217Z"
        transform="translate(-83.344 -952.617)"
        fill="#ebe3cb"
        stroke="#5c5448"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path
        id="Path_326"
        data-name="Path 326"
        d="M84.342,970.294s.49,8.57,11.272,8.473,11.237-8.473,11.237-8.473Z"
        transform="translate(-82.221 -953.728)"
        fill="#ebe3cb"
        stroke="#5c5448"
        strokeWidth="1"
      />
      <g
        id="Rectangle_30"
        data-name="Rectangle 30"
        transform="translate(0 12.678)"
        fill="#ebe3cb"
        stroke="#5c5448"
        strokeWidth="1"
      >
        <rect width="27.166" height="4.528" rx="2.264" stroke="none" />
        <rect
          x="0.5"
          y="0.5"
          width="26.166"
          height="3.528"
          rx="1.764"
          fill="none"
        />
      </g>
      <g
        id="Rectangle_32"
        data-name="Rectangle 32"
        transform="translate(22.231 2.807) rotate(47)"
        fill="#ebe3cb"
        stroke="#5c5448"
        strokeWidth="1"
      >
        <rect width="8.15" height="3.622" rx="1.811" stroke="none" />
        <rect
          x="0.5"
          y="0.5"
          width="7.15"
          height="2.622"
          rx="1.311"
          fill="none"
        />
      </g>
      <g id="Group_63" data-name="Group 63" transform="translate(3.675 1.137)">
        <path
          id="Path_329"
          data-name="Path 329"
          d="M92.829,960.916c-1.11,1.221-6.439,1.887-6.772-7.66C86.169,953.256,97.525,955.16,92.829,960.916Z"
          transform="translate(-86.058 -953.256)"
          fill="#8aaf3b"
          stroke="#332817"
          strokeWidth="1"
        />
        <path
          id="Path_328"
          data-name="Path 328"
          d="M89.245,956.811l6.217,5.884"
          transform="translate(-86.359 -953.592)"
          fill="none"
          stroke="#332817"
          strokeLinecap="round"
          strokeWidth="1"
        />
      </g>
      <g
        id="Ellipse_5"
        data-name="Ellipse 5"
        transform="translate(13.583)"
        fill="#8aaf3b"
        stroke="#8aaf3b"
        strokeWidth="1"
      >
        <circle cx="2.264" cy="2.264" r="2.264" stroke="none" />
        <circle cx="2.264" cy="2.264" r="1.764" fill="none" />
      </g>
    </svg>
  );
}

BowlIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
