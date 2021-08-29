import React from "react";
import {
    extendTheme,
    NativeBaseProvider,
    NativeBaseProviderProps,
} from "native-base";
import ButtonTheme from "./primitives/button/Button.theme";
import { InputTheme } from "./primitives/textInput/TextInput.theme";

// Import eva-design related things
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

export const Provider = (props: NativeBaseProviderProps) => {
    const theme = extendTheme({
        components: {
            Button: ButtonTheme,
            Input: InputTheme,
        },
    });

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <NativeBaseProvider theme={theme} {...props} />
            </ApplicationProvider>
        </>
    );
};
