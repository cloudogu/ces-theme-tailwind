import {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from "react";

export type ComponentTypeWithRef<Props, Element> = ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<Element>>
