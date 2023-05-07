/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				'google-dark': '#4285F4',
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out',
			},
			keyframes: function (theme) {
				return {
					fadeIn: {
						'0%': { opacity: theme('opacity.0') },
						'100%': { opacity: theme('opacity.100') },
					},
				};
			},
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#0ea5e9',
					secondary: '#444444',
					accent: '#146C94',
					neutral: '#DDDDDD',
					'base-100': '#0F0E0E',
					info: '#0091D5',
					success: '#B6EB7A',
					warning: '#FFE162',
					error: '#D61355',
				},
				light: {
					primary: '#146C94',
					secondary: '#dedede',
					accent: '#FD841F',
					neutral: '#23282E',
					'base-100': '#F3F5F6',
					info: '#0091D5',
					success: '#B6EB7A',
					warning: '#FFE162',
					error: '#D61355',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
