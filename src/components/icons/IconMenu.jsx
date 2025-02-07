

function IconMenu(props) {
  return (
<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1.5em"
      height="1.5em"
      {...props}
    >
      <path
        fill="none"
        stroke="#0249af"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="M88 152h336M88 256h336M88 360h336"
      ></path>
    </svg>
  );
}

export default IconMenu;