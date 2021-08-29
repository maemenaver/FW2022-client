import Color from "../../Color";
import { NavigationBaseProp } from "../NavigationBar/NavigationBar.type";

export interface ScreenBaseProp extends NavigationBaseProp {
    /**
     * @description children내의 backgroundColor를 지정합니다.
     * @default Color.BackgroundPrimary
     */
    backgroundColor?: Color;
    /**
     * @description children내의 backgroundColor Type을 지정합니다.
     * @deafult ScreenBackgroundType.none
     */
    backgroundType?: ScreenBackgroundType;
    children: React.ReactNode;
}

export interface ScreenProp extends ScreenBaseProp {
    /**
     * @description 좌우 간격 Dimensions.get("screen").width * 0.05 으로 지정할지 여부입니다.
     * @default true
     */
    horizontalPadding?: boolean;
}

export enum ScreenBackgroundType {
    none,
    gradientCard,
    whiteCard,
}
