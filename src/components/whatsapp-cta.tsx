import Link from "next/link";
import { Button } from "./ui/button";

const WhatsAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.416 5.582a9.783 9.783 0 0 0-13.84 13.84L4 20l.578-.582a9.785 9.785 0 0 0 13.838-13.836ZM12.002 4a8.002 8.002 0 0 0-8 8.002c0 1.637.49 3.176 1.35 4.47l-1.42 2.37 2.47-.942a7.95 7.95 0 0 0 4.6.945h.002a8.002 8.002 0 0 0 7.94-8.845A7.97 7.97 0 0 0 12.002 4Zm3.58 9.544c-.2-.1-.68-.33-1.02-.45-.22-.08-.38-.12-.54.12-.16.24-.45.54-.54.66-.08.12-.2.16-.36.04-.6-.24-1.5-.54-2.28-1.32-.58-.6-1.02-1.32-1.14-1.56-.12-.24-.02-.38.08-.48.1-.1.22-.24.32-.36.12-.12.16-.2.24-.32.08-.12.04-.24-.02-.36-.06-.12-.54-1.3-.74-1.78-.18-.46-.36-.4-.5-.4h-.4c-.16 0-.42.06-.64.3-.22.24-.86.82-.86 2s.88 2.32 1 2.48c.12.16.82 1.34 2.48 2.18.38.2.66.3.92.42.4.16.66.14.9.1.28-.06.86-.36 1-.72s.45-1.18.38-1.28c-.05-.1-.16-.16-.36-.26Z"
    />
  </svg>
);

export function WhatsAppCTA() {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
      style={{ backgroundColor: "#25D366", color: "white" }}
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </Link>
    </Button>
  );
}
