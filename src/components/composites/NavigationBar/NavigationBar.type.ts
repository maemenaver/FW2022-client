import Color from "../../Color";

export interface NavigationBaseProp {
    title?: string;
    transparentNavigation?: boolean;
    navigationPropColor?: Color;
    navigationLeftProp?: NavigationPropEnum;
    navigationRightProp?: NavigationPropEnum;
    onLeftPropPress?: () => void;
    onRightPropPress?: () => void;
}

export interface NavigationIconProp {
    prop: NavigationPropEnum;
    color: Color;
}

export enum NavigationPropEnum {
    hide,
    back,
    save,
    more,
    close,
    complete,
}
