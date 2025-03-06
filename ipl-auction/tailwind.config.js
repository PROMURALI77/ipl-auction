import { mtConfig } from "@material-tailwind/react";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                secondary: "#4338ca",
                litegrey: '#2B3139',
                darkgrey: '#1E2329',
                accent: '#181A20',
            },
            fontFamily: {
                rubik: ['Rubik-Regular', 'sans-serif'],
                'rubik-italic': ['Rubik-Italic', 'sans-serif'],
                'rubik-medium': ['Rubik-Medium', 'sans-serif'],
                'rubik-medium-italic': ['Rubik-Medium-Italic', 'sans-serif'],
                'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
                'rubik-semibold-italic': ['Rubik-SemiBold-Italic', 'sans-serif'],
                'rubik-bold': ['Rubik-Bold', 'sans-serif'],
                'rubik-bold-italic': ['Rubik-Bold-Italic', 'sans-serif'],
                poppins: ['Poppins-Regular', 'sans-serif'],
                'poppins-italic': ['Poppins-Italic', 'sans-serif'],
                'poppins-medium': ['Poppins-Medium', 'sans-serif'],
                'poppins-medium-italic': ['Poppins-Medium-Italic', 'sans-serif'],
                'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
                'poppins-semibold-italic': ['Poppins-SemiBold-Italic', 'sans-serif'],
                'poppins-bold': ['Poppins-Bold', 'sans-serif'],
                'poppins-bold-italic': ['Poppins-Bold-Italic', 'sans-serif']
            },
        },
    },
    plugins: [mtConfig],
}

