const color = {
  "pink": "#f6339a",
  "white": "#ffffff"
};

export default function Logo(props) {
  return (
    <svg
      className={`${props.size} ${props.className}`} 
      viewBox="0 0 16 16"
      fill={`${color[props.color]}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
      />
    </svg>
  );
}
