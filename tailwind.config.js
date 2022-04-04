module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {},

            colors: {
                black: '#000000',
                purple: '#4200FF',
                offReddish: '#ce3528',
                darkishBlack: '#14213d',
                DEFAULT: '#FFFFFF',
            },

            fontFamily: {
                body: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
