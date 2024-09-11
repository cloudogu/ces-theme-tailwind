import PageContentContainer from "@components/layouts/PageContentContainer";
import {Fragment} from "react";
import {NavbarRoot} from "../navbar";
import type { ReactNode} from "react";

const ApplicationContainer = function (props: { children?: ReactNode }) {
    return (
        <Fragment {...props}/>
    );
};

ApplicationContainer.displayName = "ApplicationContainer";
ApplicationContainer.ContentContainer = PageContentContainer;
ApplicationContainer.NavbarRoot = NavbarRoot;

export default ApplicationContainer;