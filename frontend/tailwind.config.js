/** @type {import('tailwindcss').Config} */
export default {
  jit:true,
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  
    theme: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          
          50:"#ddffff",
          100:"#c8f8ff",
          200:"#97efff",
          300:"#60e5ff",
          400:"#36ddff",
          500:"#18d8ff",
          600:"#00d6ff",
          700:"#00bee5",
          800:"#00a9cd", 
          900:"#0092b4"
          
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  
  plugins: [],
}

