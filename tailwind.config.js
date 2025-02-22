import daisyui from 'daisyui';
import { keepTheme } from "keep-react/keepTheme";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_ui:"#F8FAFC",
        Primary: "#0F172A",
        Secondary : "#FFD700",
        Main_text : "#1E293B",
      },
    },
  },
  plugins: [
    
    daisyui,
  ],
}

export default keepTheme(config);