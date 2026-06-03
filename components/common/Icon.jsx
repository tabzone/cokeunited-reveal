export default function Icon({
  icon,
  className = "",
}) {
  return (
    <span
      className={`w-5 h-5 flex items-center justify-center ${className}`}
    >
      {icon}
    </span>
  );
}