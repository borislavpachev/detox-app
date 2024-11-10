import PropTypes from 'prop-types';

export default function Button({ children }) {
  return (
    <button
      className="rounded-[27px] px-10 py-2 font-pt-sans-bold text-custom-green shadow-custom-md border-2 border-custom-green uppercase
  transition-colors ease-in duration-300 hover:border-transparent hover:bg-custom-green hover:text-white
   active:shadow-custom-inner active:shadow-black/30"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
