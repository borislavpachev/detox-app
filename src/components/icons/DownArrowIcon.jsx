import PropTypes from 'prop-types';

export default function DownArrowIcon({ size = 40, color = '#000000' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

DownArrowIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
