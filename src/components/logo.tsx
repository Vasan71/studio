export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
        <path
          d="M9 22V10L16 16L23 10V22"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-headline text-xl font-bold">LeadFlow</span>
    </div>
  );
}
