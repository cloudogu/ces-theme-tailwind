import { forwardRef } from "react";
import { subTestid } from "../../types/Testid";
import Body from "./Body";
import CloseIcon from "./CloseIcon";
import Footer from "./Footer";
import Header from "./Header";
import Overlay from "./Overlay";
import Portal from "./Portal";
import SegmentedContent from "./SegmentedContent";
import type { DialogSegmentedContentProps } from "./SegmentedContent";
import type Testid from "../../types/Testid";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";

export type DialogContentProps = DialogSegmentedContentProps & Testid;

type ComponentType = ComponentTypeWithRef<DialogContentProps, HTMLDivElement> & {
    Header: typeof Header;
    Body: typeof Body;
    Footer: typeof Footer;
    CloseIcon: typeof CloseIcon;
};

const Content = forwardRef<HTMLDivElement, DialogContentProps>(({ children, ...props }, ref) => (
    <Portal>
        <Overlay data-testid={subTestid(props,"overlay")}/>
        <SegmentedContent
            ref={ref}
            {...props}
        >
            {children}    
        </SegmentedContent>
    </Portal>
)) as ComponentType;

Content.displayName = "DialogContent";
Content.Header = Header;
Content.Body = Body;
Content.Footer = Footer;
Content.CloseIcon = CloseIcon;

export default Content;
