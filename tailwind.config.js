import daisyui from "daisyui"
import typography from "@tailwindcss/typography";
import patterns from "tailwindcss-bg-patterns";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        "neutral": "oklch(var(--n))"
      }
    },
  },
  plugins: [daisyui, typography, patterns],
}
