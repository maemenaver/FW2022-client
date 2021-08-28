import React, { forwardRef, memo, useEffect, useRef } from "react";
import { Text as TextNativeBase } from "native-base";
import { TextProps } from "./Text.type";

function Text(props: TextProps, ref: any) {
    const refText = useRef(ref);

    useEffect(() => {
        if (refText) {
            if (props.underline) {
                refText.current.style["textUnderlinePosition"] =
                    props.textUnderlinePosition ?? "under";
                console.log(refText);
            }
        }
    }, [refText]);

    switch (true) {
        default:
            return <TextNativeBase ref={refText} {...props} />;
    }
}

export default memo(forwardRef(Text));
