export const CaretDown = ({ color, size }) => {
  const props = {
    fill: color,
    width: size,
    height: size,
  };

  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.29289 8.79289C6.68342 8.40237 7.31658 8.40237 7.70711 8.79289L12 13.0858L16.2929 8.79289C16.6834 8.40237 17.3166 8.40237 17.7071 8.79289C18.0976 9.18342 18.0976 9.81658 17.7071 10.2071L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071L6.29289 10.2071C5.90237 9.81658 5.90237 9.18342 6.29289 8.79289Z"
        fill={color}
      />
    </svg>
  );
};

export const CaretRight = ({ color, size }) => {
  const props = {
    fill: color,
    width: size,
    height: size,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};
