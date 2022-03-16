

module.exports = {
  mdoe: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
    'bg-opacity-50',
    'dark:bg-opacity-80'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    active: 'currentColor',
    interFontFeatures: {
			default: ['calt', 'liga', 'kern'],
			numeric: ['tnum', 'salt', 'ss02']
		},
		fontFamily: {
			sans: ['Inter var', 'system-ui', 'ui-sans-serif'],
			serif: ['Inter var', 'system-ui', 'ui-sans-serif'],
			display: ['Inter var', 'system-ui', 'ui-sans-serif'],
			body: ['Inter var', 'system-ui', 'ui-sans-serif']
		},
    fontSize: {
			xs: '0.75rem',
      xm: '0.775rem',
      xb: '0.8rem',
			ss: '0.825rem',
			sm: '0.85rem',
      sb: '0.875rem',
      sl: '0.9rem', 
			tiny: '0.925rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem'
		},
    extend: {
      dropShadow: {
        '3xl': '0 3px 3px rgba(0, 0, 0, 0.30)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
			colors: {
				pblue: {
					100: '#CCE0F8',
					200: '#B2D0F3',
					300: '#99C1F0',
					400: '#7FB2EC',
					500: '#66A3E9',
					600: '#4C93E5',
					700: '#3384E1',
					800: '#1974DD',
					900: '#0065DA'
				},
				porange: {
					100: '#FFDDCC',
					200: '#FECBB2',
					300: '#FFBB99',
					400: '#FEA97F',
					500: '#FE9866',
					600: '#FE874C',
					700: '#FE7633',
					800: '#FE6519',
					900: '#FE5400'
				},
				pgreen: {
					100: '#CCEFD2',
					200: '#B2E6BB',
					300: '#99DEA5',
					400: '#7FD68E',
					500: '#66CE77',
					600: '#4CC560',
					700: '#33BD4A',
					800: '#19B533',
					900: '#00AD1D'
				}
			},
			maxWidth: {
				'8xl': '90rem',
				'9xl': '105rem',
				'10xl': '120rem'
			},
			zIndex: {
				1: 1,
				60: 60,
				70: 70,
				80: 80,
				90: 90,
				100: 100
			},
		}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}
