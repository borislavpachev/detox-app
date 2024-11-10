import PropTypes from 'prop-types';

export default function AboutElement({
  value,
  selected,
  handleSelected,
  children,
}) {
  return (
    <p
      onClick={() => handleSelected(value)}
      className={`w-full line-clamp-1 cursor-pointer border-t-4 pt-2 ${
        value === selected
          ? 'border-custom-green'
          : 'border-white text-custom-light-gray'
      }
    hover:border-custom-green`}
    >
      {children}
    </p>
  );
}

AboutElement.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.string,
  handleSelected: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
