import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollToContactAndFocusEmail() {
  try {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const mail = document.getElementById('mailto-link');
      if (mail) {
        // focus after a short delay to allow smooth scroll to start
        setTimeout(() => {
          try { mail.focus(); } catch (e) { /* ignore */ }
        }, 500);
      }
    }
  } catch (e) {
    // no-op in non-browser environments
  }
}
