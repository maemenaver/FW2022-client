import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";

import { NavigationIconProp, NavigationPropEnum } from "./NavigationBar.type";

import Text from "../../primitives/text/Text";

export default function NavigationBarProp({ prop, color }: NavigationIconProp) {
    switch (prop) {
        case NavigationPropEnum.complete:
            return <Complete color={color} />;

        case NavigationPropEnum.close:
            return (
                <Icon name="close-outline" fill={color} style={styles.icon} />
            );

        case NavigationPropEnum.back:
            return (
                <Icon
                    name="chevron-left-outline"
                    fill={color}
                    style={styles.icon}
                />
            );

        case NavigationPropEnum.more:
            return (
                <Icon
                    name="more-horizontal-outline"
                    fill={color}
                    style={styles.icon}
                />
            );

        case NavigationPropEnum.save:
            return (
                <Icon
                    name="download-outline"
                    fill={color}
                    style={styles.icon}
                />
            );

        default:
            return null;
    }
}

const Complete = ({ color }) => (
    <Text type="Body1" color={color} style={styles.marginRight}>
        완료
    </Text>
);

const styles = StyleSheet.create({
    message: {
        width: 24,
        height: 20,
        marginRight: 8,
    },

    icon: {
        width: 32,
        height: 32,
    },

    marginLeft: { marginLeft: 7 },
    marginRight: { marginRight: 7 },
    profileContainer: { flexDirection: "row", alignItems: "center" },
});
