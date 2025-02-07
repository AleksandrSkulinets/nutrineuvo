function IconClose(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="#3a3c39"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="none"
        stroke="#0249af"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}

export default IconClose;