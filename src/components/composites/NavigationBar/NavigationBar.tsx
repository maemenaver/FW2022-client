import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";

import { NavigationBaseProp, NavigationPropEnum } from "./NavigationBar.type";
import NavigationBarProp from "./NavigationBarProp";

import Color from "../../Color";
import Text from "../../primitives/text/Text";

/**
 * @description AccessoryLeft로 뒤로가기 버튼을 렌더하는 TopNavigation입니다.
 * 이를 사용하는 스크린은 반드시 Drawer의 아래에서 렌더되어야 합니다
 */
export default function NavigationBar({
    title = "",
    transparentNavigation = false,
    navigationLeftProp = NavigationPropEnum.back,
    navigationRightProp = NavigationPropEnum.hide,
    navigationPropColor = Color.BackgroundPrimary,
    onLeftPropPress,
    onRightPropPress,
}: NavigationBaseProp) {
    let navigation;

    try {
        // Declare Navigation for Routing
        navigation = useNavigation();
    } catch (err) {}

    const defaultFunction = (navigationProp: NavigationPropEnum) => {
        switch (navigationProp) {
            case NavigationPropEnum.back:
            case NavigationPropEnum.close:
                navigation.goBack();
                break;
            default:
                break;
        }
    };

    // Render Left Icon
    const LeftButton = () => {
        return (
            <TopNavigationAction
                icon={() => (
                    <NavigationBarProp
                        prop={navigationLeftProp}
                        color={navigationPropColor}
                    />
                )}
                onPress={() => {
                    onLeftPropPress
                        ? onLeftPropPress()
                        : defaultFunction(navigationLeftProp);
                }}
            />
        );
    };

    // Render Right Icon
    const RightButton = () => {
        return (
            <TopNavigationAction
                icon={() => (
                    <NavigationBarProp
                        prop={navigationRightProp}
                        color={navigationPropColor}
                    />
                )}
                onPress={() => {
                    onRightPropPress
                        ? onRightPropPress()
                        : defaultFunction(navigationRightProp);
                }}
            />
        );
    };

    return (
        <TopNavigation
            alignment="center"
            accessoryLeft={LeftButton}
            accessoryRight={RightButton}
            title={() => (
                <Text type="H3" color={navigationPropColor}>
                    {title}
                </Text>
            )}
            style={{
                backgroundColor: transparentNavigation
                    ? "transparent"
                    : "white",
            }}
        />
    );
}
