import PropTypes from 'prop-types';

export default function Section({ row = true, className, children }) {
  return (
    <section
      className={`${className} ${row ? 'md:flex-row' : ''} flex flex-col w-full
  text-main-tx-color`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  row: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
