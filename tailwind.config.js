// /** @type {import('tailwindcss').Config} */
// import { keepTheme } from "keep-react/keepTheme";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       container: {
//         center: true,
//         padding: "1rem",
//       },
//     },
//   },
//   plugins: [],
// };

import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
};

export default keepTheme(config);
