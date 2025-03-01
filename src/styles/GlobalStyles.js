import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Importing fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap');



/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */

:root {
  /* Orange */
  --color-flush-orange-50: #fff8ed;
--color-flush-orange-100: #fff0d4;
--color-flush-orange-200: #ffdda8;
--color-flush-orange-300: #ffc470;
--color-flush-orange-400: #ff9f37;
--color-flush-orange-500: #ff8b1f;
--color-flush-orange-600: #f06706;
--color-flush-orange-700: #c74d07;
--color-flush-orange-800: #9e3c0e;
--color-flush-orange-900: #7f340f;
--color-flush-orange-950: #451805;



  /* Grey */
  --color-woodsmoke-50:#f6f6f6;
--color-woodsmoke-100:#e7e7e7;
--color-woodsmoke-200:#d1d1d1;
--color-woodsmoke-300:#b0b0b0;
--color-woodsmoke-400:#888888;
--color-woodsmoke-500:#6d6d6d;
--color-woodsmoke-600:#5d5d5d;
--color-woodsmoke-700:#4f4f4f;
--color-woodsmoke-800:#454545;
--color-woodsmoke-900:#3d3d3d;
--color-woodsmoke-950:#1c1c1c;



  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);
  --backdrop-color-white: rgba(255, 255, 255, 0.01);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --border-radius-xl: 15px;
  --border-radius-full: 99999px;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;

}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-woodsmoke-50);
  background-color: var(--color-woodsmoke-950);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow-x: hidden;
 
  
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-woodsmoke-200);
  color: var(--color-woodsmoke-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-flush-orange-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'DM Sans', sans-serif;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  /* overflow-wrap: break-word;
  hyphens: auto; */
}

img {
  max-width: 100%;


}


`;

export default GlobalStyles;
