/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            900: '#0c4a6e',
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'typewriter': 'typewriter 3s steps(20) 1s 1 normal both', // FIXED
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' }
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
                            '100%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)' }
                        },
                        typewriter: {
                            '0%': { width: '0' },
                            '50%': { width: '50%' } // FIXED: was 50%
                        }
                    }
                }
            }
}
