import PropTypes from 'prop-types';

export default function ScrollCard({ data }) {
  return (
    <div className="group">
      <div className="group-hover:relative rounded-[10px] w-[260px] h-[261px] group-hover:border-[3px] group-hover:border-custom-green">
        <div
          className="flex flex-col w-[265px] h-[265px] items-center justify-center bg-white shadow-custom-card rounded-[10px]
       rotate-0 group-hover:border-[3px] group-hover:border-custom-green 
       group-hover:rotate-3 group-hover:translate-x-2 group-hover:absolute ease-in transition duration-300"
        >
          <div className="flex items-center justify-center mb-[29px]">
            <img src={data.src} alt={data.alt} />
          </div>
          <div className="w-[169px]">
            <p className="leading-[23px] line-clamp-2">{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ScrollCard.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};
