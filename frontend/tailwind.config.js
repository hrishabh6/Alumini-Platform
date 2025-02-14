import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		screens: {
  			xs: '475px'
  		},
  		colors: {
  			stanford: {
  				red: '#8C1515',
  				dark: '#2E2D29'
  			},
  			primary: {
  				'100': '#FFE8F0',
  				DEFAULT: '#E7C9A5',
  				admin: '#25388C',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			black: {
  				'100': '#333333',
  				'200': '#141413',
  				'300': '#7D8087',
  				DEFAULT: '#000000'
  			},
  			white: {
  				'100': '#F7F7F7',
  				DEFAULT: '#FFFFFF'
  			},
  			green: {
  				'100': '#ECFDF3',
  				'400': '#4C7B62',
  				'500': '#2CC171',
  				'800': '#027A48',
  				DEFAULT: '#027A48'
  			},
  			red: {
  				'400': '#F46F70',
  				'500': '#E27233',
  				'800': '#EF3A4B',
  				DEFAULT: '#EF3A4B'
  			},
  			blue: {
  				'100': '#0089F1'
  			},
  			light: {
  				'100': '#D6E0FF',
  				'200': '#EED1AC',
  				'300': '#F8F8FF',
  				'400': '#EDF1F1',
  				'500': '#8D8D8D',
  				'600': '#F9FAFB',
  				'700': '#E2E8F0',
  				'800': '#F8FAFC'
  			},
  			dark: {
  				'100': '#16191E',
  				'200': '#3A354E',
  				'300': '#232839',
  				'400': '#1E293B',
  				'500': '#0F172A',
  				'600': '#333C5C',
  				'700': '#464F6F',
  				'800': '#1E2230'
  			},
  			gray: {
  				'100': '#CBD5E1'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			'work-sans': [
  				'var(--font-work-sans)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'100': '2px 2px 0px 0px rgb(0, 0, 0)',
  			'200': '2px 2px 0px 2px rgb(0, 0, 0)',
  			'300': '2px 2px 0px 2px rgb(238, 43, 105)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    tailwindcssAnimate,
    typography,
  ],
};

export default config;