import { Meta } from "@storybook/react";


const meta: Meta<any> = {
    title: "CES Theme/Text elements",
};

const Template = (args: any) => {
    const content = "the quick brown fox jumps over the fence.";

    return (
    <>
        <h1>{content}</h1>
        <h2>{content}</h2>
        <h3>{content}</h3>
        <h4>{content}</h4>
        <h5>{content}</h5>  
        <h6>{content}</h6>  
    </>
    )
};

export const Headlines = Template.bind({}) as unknown as {args: any};
export default meta;