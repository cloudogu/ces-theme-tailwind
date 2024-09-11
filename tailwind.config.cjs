function bgColorNamesForColor(name) {
    return ["-stronger", "-strong", "", "-weak", "-weaker"].map(e => `bg-${name}${e}`);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    presets: [require('./config/tailwind.presets.cjs')],
    /**
     * Necessary for the theme palette story. Otherwise the classes would not be generated.
     */
    safelist: [
        ...bgColorNamesForColor("brand"),
        ...bgColorNamesForColor("success"),
        ...bgColorNamesForColor("danger"),
        ...bgColorNamesForColor("warning"),
        ...bgColorNamesForColor("neutral"),
        "bg-default-background",
        "bg-default-focus-inner",
        "bg-default-focus-outer",
        "bg-default-text",
        "bg-inverted-text",
        "text-brand-strong",
        "text-success-strong",
        "text-danger-strong",
        "text-warning-strong",
        "text-neutral-strong",
    ],
};
