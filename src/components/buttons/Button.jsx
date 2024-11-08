import PropTypes from 'prop-types';

export default function Button({ children }) {
  return <button className='rounded-[27px] w-[179px] h-[40px] font-pt-sans-bold text-custom-green shadow-custom-md border-2 border-custom-green uppercase
  transition-colors ease-in duration-300  hover:border-transparent hover:bg-custom-green hover:text-white'>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
