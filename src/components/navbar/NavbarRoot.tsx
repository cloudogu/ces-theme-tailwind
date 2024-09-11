import useResizeObserver from "@src/hooks/useResizeObserver";
import React, {useContext, useEffect, useState} from "react";
import type {ReactNode, RefObject} from "react";

export type NavbarRootProps = {
    children?: ReactNode,
    hardBreakpointMobile?: number,
    enableAutoCollapse?: boolean,
};

const SizeContext = React.createContext<{
    registerForMinWidthCount: (_element: RefObject<HTMLElement>, _name: string) => void,
    registerForActualWidthCount: (_element: RefObject<HTMLElement>, _name: string) => void,
    registerNavbar: (_element: RefObject<HTMLElement>) => void,
    registerMoreMenuWidth: (_element: RefObject<HTMLElement>) => void,
    moreMenuMinWidth: number,
    forceMobile: boolean,
    enableAutoCollapse: boolean,
        } | null>(null);

export function useNavbarContext() {
    const context = useContext(SizeContext);

    if (context === null) {
        throw new Error("You cannot use this component outside of the navbar root.");
    }

    return context;
}


const NavbarRoot = ({hardBreakpointMobile = 767, enableAutoCollapse = true, ...props}: NavbarRootProps) => {
    const [minWidths, setMinWidths] = useState<Map<string, number>>(new Map());
    const [actualWidths, setActualWidths] = useState<Map<string, number>>(new Map());
    const [navbarWidth, setNavbarWidth] = useState(0);
    const [navbarScrollWidth, setNavbarScrollWidth] = useState(0);
    const [minWidthMore, setMinWidthMore] = useState(0);
    const [gapsCalculated, setGapsCalculated] = useState(0);
    const [minWidthWithoutGapsCalculated, setMinWidthWithoutGapsCalculated] = useState(0);
    const [actualWidthCalculated, setActualWidthCalculated] = useState(0);
    const [forceMobile, setForceMobile] = useState(false);
    const [minWidthCalculated, setMinWidthCalculated] = useState(0);

    useEffect(() => {
        if (!enableAutoCollapse) {
            return;
        }
        setMinWidthWithoutGapsCalculated(
            Array.from(minWidths.values())
                .reduce((a, b) => a + b, 0)
        );
    }, [minWidths, enableAutoCollapse]);

    useEffect(() => {
        if (!enableAutoCollapse) {
            return;
        }
        setActualWidthCalculated(Array.from(actualWidths.values())
            .reduce((a, b) => a + b, 0));
    }, [actualWidths, enableAutoCollapse]);

    useEffect(() => {
        if (!enableAutoCollapse) {
            return;
        }
        if (!forceMobile && document.body.offsetWidth > hardBreakpointMobile) {
            setGapsCalculated(navbarScrollWidth - actualWidthCalculated);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualWidthCalculated, navbarScrollWidth, enableAutoCollapse]);

    useEffect(() => {
        if (!enableAutoCollapse) {
            return;
        }
        setMinWidthCalculated(minWidthWithoutGapsCalculated + gapsCalculated);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minWidthWithoutGapsCalculated, gapsCalculated, enableAutoCollapse]);

    useEffect(() => {
        if (!enableAutoCollapse) {
            setForceMobile(false);
            return;
        }
        setForceMobile(navbarWidth < minWidthCalculated);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbarWidth, minWidthCalculated, enableAutoCollapse]);

    const useRegisterForMinWidth = (ref: RefObject<HTMLElement>, name: string) => {
        useResizeObserver(ref, (value) => {
            const nextWidth = value.getBoundingClientRect().width ?? 0;
            if (nextWidth !== 0) {
                const map = new Map(minWidths.set(name, nextWidth));
                setMinWidths(map);
            }
        });
    };
    const useRegisterForActualWidth = (ref: RefObject<HTMLElement>, name: string) => {
        useResizeObserver(ref, (value) => {
            const nextWidth = value.getBoundingClientRect().width ?? 0;
            if (nextWidth !== 0) {
                const map = new Map(actualWidths.set(name, nextWidth));
                setActualWidths(map);
            }
        });
    };

    const useRegisterNavbarWidth = (ref: RefObject<HTMLElement>) => {
        useResizeObserver(ref, (value) => {
            setNavbarWidth(value.getBoundingClientRect().width ?? 0);
            setNavbarScrollWidth(value.scrollWidth ?? 0);
        });
    };

    const useRegisterMoreMenu = (ref: RefObject<HTMLElement>) => {
        useResizeObserver(ref, (value) => {
            const nextWidth = value.getBoundingClientRect().width ?? 0;
            if (nextWidth !== 0) {
                setMinWidthMore(nextWidth);
            }
        });
    };

    // useRerenderOnLocationChange();

    return (
        <SizeContext.Provider
            {...props}
            key={Array.from(minWidths.values()).join(",")} // Force rerender when min widths change
            value={
                {
                    registerForMinWidthCount: useRegisterForMinWidth,
                    registerForActualWidthCount: useRegisterForActualWidth,
                    registerNavbar: useRegisterNavbarWidth,
                    registerMoreMenuWidth: useRegisterMoreMenu,
                    moreMenuMinWidth: minWidthMore,
                    forceMobile: forceMobile,
                    enableAutoCollapse: enableAutoCollapse,
                }
            }
        />
    );
};

NavbarRoot.displayName = "NavbarRoot";

export default NavbarRoot;