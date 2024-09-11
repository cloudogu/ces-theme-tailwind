import React from 'react';
import {Meta} from "@storybook/react";
import {Details} from "@src/index";

const meta: Meta<any> = {
    title: 'CES Theme/Interactable/Details',
    argTypes: {
        summary: {
            control: "text"
        },
        content: {
            control: "text"
        }
    },
    component: Details,
};

const Template = (args: any) => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

    return (<div>
        <Details className={"mb-2"}>
            <Details.Summary>
                <Details.Summary.Arrow/>
                {args.summary}
            </Details.Summary>
            <Details.Content>
                {args.content}
            </Details.Content>
        </Details>

        <Details className={"mb-2"}>
            <Details.Summary>
                <Details.Summary.Arrow/>
                {args.summary} 1
            </Details.Summary>
            <Details.Content>
                {loremIpsum}
            </Details.Content>
        </Details>

        <Details className={"mb-2"}>
            <Details.Summary>
                <Details.Summary.Arrow/>
                {args.summary} 2
            </Details.Summary>
            <Details.Content>
                {loremIpsum}
                <img src={"https://www.google.de/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}/>
                {loremIpsum}
            </Details.Content>
        </Details>
    </div>);
};

export const Playground = Template.bind({}) as any;

Playground.args = {
    summary: "Summary",
    content: "Change Me, Please."
};

export default meta;
