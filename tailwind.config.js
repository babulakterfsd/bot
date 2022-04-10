/* eslint-disable global-require */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            screens: {},

            colors: {
                black: '#000000',
                purple: '#4200FF',
                offReddish: '#ce3528',
                darkishBlack: '#0f0c16',
                DEFAULT: '#FFFFFF',
            },

            fontFamily: {
                body: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
