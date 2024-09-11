const mapping = require("./colormapping.json");
const colorscheme = require("./colorscheme.json");

function extractFullColor(color) {
    return Object.entries(mapping[color]).map(entry => ({
        name: `${entry[0]}`,
        value: colorscheme[color][entry[1]],
    })).reduce((a, b) => {
        a[b.name] = b.value;
        return a;
    }, {});
}

function extractColorByName(name) {
    return name.split("-").reduce((a, b) => a[b], colorscheme);
}

function defineColorVariableName(color) {
    return `var(--ces-color-${color})`;
}

function defineColorVariableNames(color) {
    return {
        stronger: `var(--ces-color-${color}-stronger)`,
        strong: `var(--ces-color-${color}-strong)`,
        DEFAULT: `var(--ces-color-${color})`,
        weak: `var(--ces-color-${color}-weak)`,
        weaker: `var(--ces-color-${color}-weaker)`,
    };
}

module.exports = {
    colors: {
        brand: extractFullColor("brand"),
        success: extractFullColor("success"),
        danger: extractFullColor("danger"),
        warning: extractFullColor("warning"),
        neutral: extractFullColor("neutral"),
        "default-background": extractColorByName(mapping.other["default-background"]),
        "default-focus-inner": extractColorByName(mapping.other["default-focus-inner"]),
        "default-focus-outer": extractColorByName(mapping.other["default-focus-outer"]),
        "default-text": extractColorByName(mapping.other["default-text"]),
        "inverted-text": extractColorByName(mapping.other["inverted-text"]),
    },
    variableNames: {
        brand: defineColorVariableNames("brand"),
        success: defineColorVariableNames("success"),
        danger: defineColorVariableNames("danger"),
        warning: defineColorVariableNames("warning"),
        neutral: defineColorVariableNames("neutral"),
        "default-background": defineColorVariableName("default-background"),
        "default-focus-inner": defineColorVariableName("default-focus-inner"),
        "default-focus-outer": defineColorVariableName("default-focus-outer"),
        "default-text": defineColorVariableName("default-text"),
        "inverted-text": defineColorVariableName("inverted-text"),
    },
};