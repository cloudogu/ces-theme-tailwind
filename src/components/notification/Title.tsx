import {forwardRef, useMemo} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { HTMLAttributes} from "react";

export type NotificationTitleProps = HTMLAttributes<HTMLHeadingElement> & Testid & {
    /**
     * Defines the level of the title (1=h1, 2=h2), depending on if the alert is used with or without an existing h1 headline.
     * Default level is 2.
     */
    level?: 1 | 2;
};

type ComponentType = ComponentTypeWithRef<NotificationTitleProps, HTMLHeadingElement>;

const Title = forwardRef<HTMLHeadingElement, NotificationTitleProps>(({level = 2, className, ...props}, ref) => {
    const mergedClasses = useMemo(() => twMerge("text-default-text desktop:text-desktop-5xl mobile:text-mobile-5xl", className), [className]);

    return (
        (level === 1) ?
            <h1
                ref={ref}
                className={mergedClasses}
                {...props}
            />
            :
            <h2
                ref={ref}
                className={mergedClasses}
                {...props}
            />
    );
}) as ComponentType;

Title.displayName = "NotificationTitle";

export default Title;