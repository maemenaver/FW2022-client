import Color from "../../Color";
import { NavigationBaseProp } from "../NavigationBar/NavigationBar.type";

export interface ScreenBaseProp extends NavigationBaseProp {
    backgroundColor?: Color;
    backgroundType?: ScreenBackgroundType;
    children: React.ReactNode;
}

export interface ScreenProp extends ScreenBaseProp {
    horizontalPadding?: boolean;
}

export enum ScreenBackgroundType {
    none,
    gradientCard,
    whiteCard,
}
