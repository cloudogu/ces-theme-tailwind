import { Meta } from "@storybook/react";


const meta: Meta<any> = {
    title: "CES Theme/Text elements",
};

const Template = (args: any) => {
    return (
    <>
        <p>If you want to find something in the web, you can use <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>.</p>
        <p>But you can also use <a href="https://www.bing.com/" target="_blank" rel="noopener noreferrer">Bing</a>.</p>
        <p>If you have a focus on privacy, you may use <a href="https://duckduckgo.com/" target="_blank" rel="noopener noreferrer">DuckDuckGo</a>.</p>
    </>
    )
};

export const Links = Template.bind({}) as unknown as {args: any};
export default meta;