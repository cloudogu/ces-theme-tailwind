import {render} from "@testing-library/react";
import React from "react";
import {useNavbarContext} from './NavbarRoot';
import {NavbarRoot} from './index';

describe('<NavbarRoot />', () => {
    const Component = ({children}: {children: (f: ReturnType<typeof useNavbarContext>) => void}) => {
        children(useNavbarContext());
        return <></>
    };
    test("should register context", async () => {
        render(
            <NavbarRoot>
                <Component>
                    {(context) => {
                        expect(context.enableAutoCollapse).toEqual(true);
                        expect(context.forceMobile).toEqual(false);
                        expect(context.moreMenuMinWidth).toEqual(0);
                        expect(context.registerMoreMenuWidth).toBeTruthy();
                        expect(context.registerNavbar).toBeTruthy();
                        expect(context.registerForMinWidthCount).toBeTruthy();
                        expect(context.registerForActualWidthCount).toBeTruthy();
                    }}
                </Component>
            </NavbarRoot>
        );
    });

    test("should have expected encapsulated components", async () => {
        expect(NavbarRoot.Navbar).toBeTruthy();
        expect(NavbarRoot.SegmentedNavbar).toBeTruthy();
    });

});