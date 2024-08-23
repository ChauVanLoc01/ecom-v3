/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    darkMode: ['class'],
    content: [
        'node_modules/preline/dist/*.js',
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            keyframes: {
                'caret-blink': {
                    '0%,70%,100%': { opacity: '1' },
                    '20%,50%': { opacity: '0' }
                }
            },
            animation: {
                'caret-blink': 'caret-blink 1.25s ease-out infinite'
            },
            colors: {
                bell: 'rgb(219, 224, 229)',
                border: 'rgb(190, 200, 208)'
            },
            borderRadius: {
                6: '6px',
                8: '8px',
                12: '12px',
                16: '16px',
                22: '22px',
                24: '24px'
            },
            padding: {
                6: '6px',
                8: '8px',
                12: '12px',
                14: '14px',
                16: '16px',
                20: '20px',
                22: '22px',
                24: '24px',
                48: '48px'
            },
            gap: {
                25: '25px',
                48: '48px'
            },
            fontFamily: {
                default: 'Inter, sans-serif'
            },
            boxShadow: {
                input: '0 0 0 2px rgba(5, 145, 255, 0.1)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require('tailwindcss-animate'), require('preline/plugin'), require('@tailwindcss/forms')]
}
