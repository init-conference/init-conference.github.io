const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    //    mode: "jit",
    //  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./view/**/*.{js,ts,jsx,tsx}"],
    //  darkMode: false, // or 'media' or 'class'
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            blue: {
                dark: "#171A31",
                light: "#2CB3FF",
                DEFAULT: "#2CB3FF",
            },
            pink: {
                DEFAULT: "#E561A8",
            },
            white: {
                DEFAULT: "#ffffff",
            },
            yellow: {
                DEFAULT: "#E4CC83",
            },
            social: {
                linkedin: "#0077b5",
                facebook: "#3b5998",
                google: "#d44638",
                github: "#333333",
            },
            premium: {
                400: "#E3A13D",
                300: "#EBB304",
                250: "#feefc1",
                200: "#ffde6a",
                100: "#fffefa",
            },
        },
        flexGrow: {
            2: "2",
        },
        theme: {
            container: {
                center: true,
            }
        },
        screens: {
            'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
            '3xl': '1920px'}
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
