export default function BeanIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="16"
        cy="16"
        rx="10"
        ry="13"
        transform="rotate(30 16 16)"
        fill="currentColor"
      />
      <path
        d="M10 6.5c5 4 3 9 6 12.5s7 4.5 8 9"
        stroke="var(--cream, #f6efe4)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        transform="rotate(2 16 16)"
      />
    </svg>
  )
}
