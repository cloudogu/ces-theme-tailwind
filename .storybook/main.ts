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
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
        '@storybook/addon-controls',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
