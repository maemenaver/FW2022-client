import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center, Input } from "native-base";
import { text } from "@storybook/addon-knobs";

import { Provider } from "../../Provider";
import { PixelRatio } from "react-native";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("TextInput", module)
    .add("Default TextInput", () => {
        return (
            <>
                <Provider>
                    <Center flex={1}>
                        <Input placeholder={text("text", "아이디")} />
                    </Center>
                </Provider>
            </>
        );
    })
    .add("Underline TextInput", () => {
        return (
            <>
                <Provider>
                    <Center flex={1}>
                        <Input
                            placeholder={text("text", "아이디")}
                            variant={"underlined"}
                        />
                    </Center>
                </Provider>
            </>
        );
    });
