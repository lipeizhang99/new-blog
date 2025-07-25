module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        
        extend: {
            fontFamily: {
                'sans': ['PingFang SC', 'Microsoft YaHei', 'sans-serif']
            },
            width: {
                '100': '25rem',
                '104': '26rem'
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#3b82f6",
                    "secondary": "#64748b",
                    "accent": "#f59e0b",
                    "neutral": "#374151",
                    "base-100": "#ffffff",
                },
                night: {
                    "primary": "#60a5fa",
                    "secondary": "#94a3b8",
                    "accent": "#fbbf24",
                    "neutral": "#d1d5db",
                    "base-100": "#1f2937",
                }
            }
        ]
    }
}