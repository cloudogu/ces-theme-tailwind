import {Meta} from "@storybook/react";
import React from "react";
import "@src/i18n";
import {ApplicationContainer} from '@src/index';
import {BrowserRouter} from "react-router-dom";

const meta: Meta<{ layout: string, empty: boolean, pageTitle: string, pageContent: string }> = {
    title: "CES Theme/General/Layouts",
    argTypes: {
        layout: {
            control: "select",
            options: ["large", "full"],
        },
        empty: {
            type: "boolean",
        },
        pageTitle: {
            type: "string",
        },
        pageContent: {
            type: "string",
        },
    },
    args: {
        layout: "large",
        empty: true,
        pageTitle: "Page Title",
        pageContent: "Page Content"
    },
};

const Template = ({empty, layout, pageTitle, pageContent}: {
    layout: "large",
    empty: boolean,
    pageTitle: string,
    pageContent: string
}) => {
    return (
        <BrowserRouter>
            <ApplicationContainer.ContentContainer className={"bg-brand-weak"}>
                {layout === "large" && <>
                    {empty &&
                        <ApplicationContainer.ContentContainer.EmptyLargePage
                            applicationTitle={"Testpage"}
                            className={"bg-danger-weak"}>
                            &nbsp;
                        </ApplicationContainer.ContentContainer.EmptyLargePage>}
                    {!empty &&
                        <ApplicationContainer.ContentContainer.LargePage
                            applicationTitle={"Testpage"}
                            className={"bg-danger-weak"}
                            pageHeadline={pageTitle}>
                            {pageContent}
                        </ApplicationContainer.ContentContainer.LargePage>
                    }
                </>
                }
                {layout === "full" && <>
                    {empty &&
                        <ApplicationContainer.ContentContainer.EmptyFullPage
                            applicationTitle={"Testpage"}
                            className={"bg-danger-weak"}>
                            &nbsp;
                        </ApplicationContainer.ContentContainer.EmptyFullPage>}
                    {!empty &&
                        <ApplicationContainer.ContentContainer.FullPage
                            applicationTitle={"Testpage"}
                            className={"bg-danger-weak"}
                            pageHeadline={pageTitle}>
                            {pageContent}
                        </ApplicationContainer.ContentContainer.FullPage>
                    }
                </>
                }
            </ApplicationContainer.ContentContainer>
        </BrowserRouter>
    );
}

export const Primary = Template.bind({}) as unknown as { args: {} };
export default meta;