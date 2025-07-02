/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'login-button': '#7F00FF',
            },
            boxShadow: {
                form: '0px 0px 10px 0px #0000000F',
            },
            letterSpacing: {
                DEFAULT: '-0.03em',
            },
        },
    },
    plugins: [],
};
