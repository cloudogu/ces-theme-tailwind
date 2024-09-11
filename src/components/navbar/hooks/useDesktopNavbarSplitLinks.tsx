import {useNavbarContext} from "@components/navbar/NavbarRoot";
import useElementWidth from "@src/hooks/useElementWidth";
import {useEffect, useMemo, useState} from "react";
import type { NavbarLinkType } from "@components/navbar/models/NavbarLinkType";

export default function useDesktopNavbarSplitLinks<T extends HTMLElement>(links: NavbarLinkType[]) {
    const {ref, width: availableWidth} = useElementWidth<T>();
    const [initialized, setInitialized] = useState(false);
    const [itemsToRenderInBar, setItemsToRenderInBar] = useState<NavbarLinkType[]>(links);
    const [itemsToRenderInMenu, setItemsToRenderInMenu] = useState<NavbarLinkType[]>(links);
    const [widths, setWidths] = useState<number[]>([]);
    const [menuWidth, setMenuWidth] = useState<number>(0);
    const allItemWidths = useMemo(() => widths.reduce((a, b) => a + b, 0), [widths]);
    const {enableAutoCollapse} = useNavbarContext();

    useEffect(() => {
        if (!enableAutoCollapse) {
            return;
        }

        if (links?.length !== widths?.length) {
            setInitialized(false);
        }

        if (!ref?.current || initialized) {
            return;
        }

        const all = Array.from(ref.current.children).map(c => c.getBoundingClientRect().width);
        const menuWidth = all.pop() ?? 0;

        if (menuWidth > 0 && all.reduce((a, b) => a + b, 0) > 0) {
            setWidths(all);
            setMenuWidth(menuWidth);
            setInitialized(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current, links, initialized, availableWidth, enableAutoCollapse]);

    useEffect(() => {
        if (!enableAutoCollapse) {
            setItemsToRenderInBar(links);
            setItemsToRenderInMenu([]);
            return;
        }

        let nextBarItems: NavbarLinkType[] = [];
        let nextMenuItems: NavbarLinkType[] = [];
        const r: number[] = [];
        if (allItemWidths <= availableWidth) {
            nextBarItems = links;
            nextMenuItems = [];
        } else {
            let currentWidth = menuWidth;
            for (let i = 0; i < widths?.length; i++) {
                currentWidth += widths[i];

                if (currentWidth <= availableWidth) {
                    r.push(menuWidth, widths[i]);
                    nextBarItems.push(links[i]);
                } else {
                    nextMenuItems.push(links[i]);
                }
            }
            r.push(r.reduce((a, b) => a + b, 0));
        }

        setItemsToRenderInBar(nextBarItems);
        setItemsToRenderInMenu(nextMenuItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [availableWidth, initialized, widths, menuWidth, links, enableAutoCollapse]);

    return {
        ref,
        itemsToRenderInBar: ((initialized) ? itemsToRenderInBar : links) as NavbarLinkType[],
        itemsToRenderInMenu: ((initialized) ? itemsToRenderInMenu : links) as NavbarLinkType[],
    } as const;
}