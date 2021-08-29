import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center } from "native-base";

import { PixelRatio } from "react-native";
import { number, text } from "@storybook/addon-knobs";
import { Provider } from "../../components/Provider";
import Button from "../../components/primitives/button/Button";
import DividerText from "../../components/composites/divider/DividerText";
import Text from "../../components/primitives/text/Text";
import AuthMain from "./AuthMain";
import AuthEmail from "./AuthEmail";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("Auth Screen", module)
    .add("Main", () => {
        return (
            <>
                <Provider>
                    <AuthMain />
                </Provider>
            </>
        );
    })
    .add("Email Login", () => {
        return (
            <>
                <Provider>
                    <AuthEmail />
                </Provider>
            </>
        );
    });
