/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			keyframes: {
				"bell-shake": {
					"0%, 100%": { transform: "rotate(0deg)" },
					"20%, 60%": { transform: "rotate(-12deg)" },
					"40%, 80%": { transform: "rotate(12deg)" },
				},
			},
			animation: {
				"bell-shake": "bell-shake 0.4s ease-in-out",
			},
		},
	},
	plugins: [flowbite.plugin()],
};
