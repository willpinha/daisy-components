import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte}", "./examples/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: true
  }
}
