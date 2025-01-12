# Tailwindcss React Vite Typescript

## Install Tailwind CSS

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```bash javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

import index.css file in main.tsx

# Tailwind plugin and VScode settings

> Settings > file associations > set Item and Value to:
> \*.css + tailwindcss
>
> Settings > editor quick suggestions > set 'strings' option to 'on'
>
> also download ESLint
>
> install Icon package > npm i lucide-react

# React Tipps

{} = window to javascript
!!! but only expressions are allowed inside of return ()
!!! also {{{}}}

when looping throug array always assign an id-element like

  <p key={todo.id}>

# font-family inter

## Installation

Install the variable version of this font by running the following command:

npm install @fontsource-variable/inter

Import
Include the following line in the root layout of your project to import the font:

// Supports weights 100-900
import '@fontsource-variable/inter/opsz-italic.css';

CSS
Include the CSS in your project by adding the following line to your project:

body {
font-family: 'Inter Variable', sans-serif;
}
