const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const {heroui} = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(
            __dirname,
            '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
        ),
            "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {},
    },
  plugins: [heroui()],
};
