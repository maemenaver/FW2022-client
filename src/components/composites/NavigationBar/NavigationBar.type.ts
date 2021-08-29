import Color from "../../Color";

export interface NavigationBaseProp {
    /**
     * @description transparent가 false인 경우에 표시할 타이틀 텍스트를 전달합니다.
     * @default false
     */
    title?: string;
    /**
     * @description NavigationBar의 투명여부를 지정합니다.
     * @default false
     */
    transparentNavigation?: boolean;
    /**
     * @description NavigationBar 요소의 색을 지정합니다.
     * @default
     * 일반적으로, Color.TextPrimary
     * 그라디언트 타입일 경우, Color.BackgroundPrimary
     */
    navigationPropColor?: Color;
    /**
     * @description 왼쪽 액션 버튼의 타입을 결정합니다.
     * @default "back"
     */
    navigationLeftProp?: NavigationPropEnum;
    /**
     * @description 오른쪽 액션 버튼의 타입을 결정합니다.
     * @default "hide"
     */
    navigationRightProp?: NavigationPropEnum;
    /**
     * TopNavigation에서 좌측버튼을 렌더할 경우 작성합니다.
     * 완료, 더보기(...), 저장 등의 우측에 위치하는 버튼들의 기능을 전달하는 함수입니다.
     */
    onLeftPropPress?: () => void;
    /**
     * TopNavigation에서 우측버튼을 렌더할 경우 작성합니다.
     * 완료, 더보기(...), 저장 등의 우측에 위치하는 버튼들의 기능을 전달하는 함수입니다.
     */
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
