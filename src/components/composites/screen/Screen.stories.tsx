import React from "react";
import { Center } from "native-base";
import { storiesOf } from "@storybook/react-native";
import { text } from "@storybook/addon-knobs";

import { Provider } from "../../Provider";
import { Screen } from ".";
import Text from "../../primitives/text/Text";

storiesOf("Screen", module).add("Default Screen", () => {
    return (
        <>
            <Provider>
                <Screen title="Title">
                    <Text type="LargeTitle">내용</Text>
                </Screen>
            </Provider>
        </>
    );
});
