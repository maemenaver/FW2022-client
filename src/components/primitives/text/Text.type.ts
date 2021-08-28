import { ITextProps } from "native-base/lib/typescript/components/primitives";

export interface TextProps extends ITextProps {
    /**
     * @default "under"
     */
    textUnderlinePosition?: string;
    type: TextType;
}

const TextType = {
    LargeTitle: "LargeTitle",
    H1: "H1",
    H2: "H2",
    H3: "H3",
    Body1: "Body1",
    Body2: "Body2",
    Caption: "Caption",
    ButtonL: "ButtonL",
    ButtonM: "ButtonM",
    ButtonS: "ButtonS",
} as const;
export type TextType = typeof TextType[keyof typeof TextType];
