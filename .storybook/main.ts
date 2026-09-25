import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
    staticDirs: [
        "./public"
    ],
    stories: [
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../src/**/*.mdx",
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-docs',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
export default config;
