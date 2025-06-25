module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
};
