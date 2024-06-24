/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['Roboto', 'Helvetica', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

