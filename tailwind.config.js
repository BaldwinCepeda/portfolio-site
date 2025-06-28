/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                garamond: ['var(--font-ebgaramond)', 'serif']
            }
        }
    },
    plugins: []
};