import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                'sf-pro': ['SF Pro Display', 'system-ui', 'sans-serif'],
                unbounded: ['Unbounded', 'system-ui', 'sans-serif'],
            },
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
            },
            colors: {
                primary: {
                    DEFAULT: '#4CA1AF',
                    dark: '#2C3E50',
                },
                surface: {
                    white: '#FFFFFF',
                    light: '#F5F7FA',
                },
                text: {
                    primary: '#1A1A1A',
                    secondary: '#666666',
                    white: '#FFFFFF',
                },
            },
            borderRadius: {
                card: '1rem',
                button: '9999px',
            },
            spacing: {
                'safe-bottom': 'env(safe-area-inset-bottom)',
            },
            backgroundImage: {
                'gradient-card':
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)',
                'gradient-primary':
                    'linear-gradient(135deg, #4CA1AF 0%, #2C3E50 100%)',
            },
            screens: {
                xs: '320px',
                sm: '480px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
