import React from "react";
import { View } from "native-base";

import { ScreenBackgroundType, ScreenProp } from "./Screen.type";
import ScreenBase from "./ScreenBase";

import NavigationBar from "../NavigationBar/NavigationBar";
import Color from "../../Color";

import { StatusBar } from "../../../basic/StatusBar";
import { Dimensions, SafeAreaView } from "react-native";

export function Screen({
    horizontalPadding = true,
    transparentNavigation = false,
    navigationPropColor = Color.TextPrimary,
    backgroundColor = Color.BackgroundPrimary,
    backgroundType = ScreenBackgroundType.none,
    children,
    ...props
}: ScreenProp) {
    const navigationTransparent =
        backgroundType !== ScreenBackgroundType.gradientCard
            ? transparentNavigation
            : true;

    return (
        <ScreenBase
            backgroundColor={backgroundColor}
            backgroundType={backgroundType}
        >
            <StatusBar hide={navigationTransparent} />
            <NavigationBar
                transparentNavigation={navigationTransparent}
                navigationPropColor={
                    backgroundType !== ScreenBackgroundType.gradientCard
                        ? navigationPropColor
                        : Color.BackgroundPrimary
                }
                {...props}
            />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: horizontalPadding
                        ? Dimensions.get("screen").width * 0.05
                        : 0,
                }}
            >
                <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
            </View>
        </ScreenBase>
    );
}
