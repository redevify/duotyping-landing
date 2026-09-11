export function Logo({ size, className = '' }: { size: number; className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      className={`block ${className}`}
    />
  );
}
