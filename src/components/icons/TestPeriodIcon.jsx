import PropTypes from 'prop-types';

export default function TestPeriodIcon({
  width = 50.42,
  height = 35.923,
  fill = '#0B0B0B',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50.42 35.923"
    >
      <g
        id="Group_393"
        data-name="Group 393"
        transform="translate(-138 -640.641)"
      >
        <g id="delivery" transform="translate(151.274 640.641)">
          <path
            id="Path_596"
            data-name="Path 596"
            d="M141.592,76.9V88.338h7.292V86.326H143.6V76.9Z"
            transform="translate(-123.904 -68.687)"
            fill={fill}
          />
          <path
            id="Path_597"
            data-name="Path 597"
            d="M38.043,27.389c0-9.586-7.628-15.794-17.214-15.794a17.455,17.455,0,0,0-17.14,14.5H.9l4.815,8.3,4.956-8.3H7.782A13.336,13.336,0,0,1,20.838,15.618c7.368,0,13.3,4.5,13.62,11.771.113,5.18.47,9.6-5.109,12.941l.8,3.691C34.969,40.82,38.043,39.314,38.043,27.389Z"
            transform="translate(-0.897 -11.595)"
            fill={fill}
          />
        </g>
        <text
          id="_14_дни"
          data-name="14 дни"
          transform="translate(138 673.564)"
          fontSize="10"
          fontFamily="PTSans-CaptionBold, PT Sans Caption"
          fontWeight="700"
          fill={fill}
        >
          <tspan x="0" y="0">
            14 дни
          </tspan>
        </text>
      </g>
    </svg>
  );
}

TestPeriodIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};
