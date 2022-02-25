module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 3px rgb(255 23 101 / 80%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '2%, 98%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 4px rgb(255 23 101 / 78%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '5%, 95%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 4px rgb(255 23 101 / 75%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '7%, 93%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 5px rgb(255 23 101 / 72%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '10%, 90%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 5px rgb(255 23 101 / 70%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '12%, 88%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 6px rgb(255 23 101 / 68%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '15%, 85%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 6px rgb(255 23 101 / 65%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '17%, 83%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 7px rgb(255 23 101 / 62%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '20%, 80%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 7px rgb(255 23 101 / 60%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '22%, 78%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 8px rgb(255 23 101 / 58%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '25%, 75%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 8px rgb(255 23 101 / 56%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '27%, 73%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 9px rgb(255 23 101 / 54%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '30%, 70%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 9px rgb(255 23 101 / 52%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '32%, 68%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 10px rgb(255 23 101 / 50%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '35%, 65%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 10px rgb(255 23 101 / 48%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '37%, 63%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 11px rgb(255 23 101 / 46%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '40%, 60%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 11px rgb(255 23 101 / 42%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '42%, 58%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 12px rgb(255 23 101 / 38%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '45%, 55%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 12px rgb(255 23 101 / 34%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '47%, 53%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 13px rgb(255 23 101 / 30%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
          '50%': {
            '--tw-drop-shadow': 'drop-shadow(0px 0px 13px rgb(255 23 101 / 26%))',
            filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
          },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      colors: {
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}