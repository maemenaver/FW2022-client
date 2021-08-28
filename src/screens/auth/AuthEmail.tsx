import { Flex, Input } from "native-base";
import React, { forwardRef, memo } from "react";
import DividerText from "../../components/composites/divider/DividerText";
import Button from "../../components/primitives/button/Button";
import Text from "../../components/primitives/text/Text";

function AuthEmail(props: any, ref: any) {
    return (
        <Flex marginX={10}>
            <Input placeholder="아이디" variant="underlined" />
            <Input placeholder="아이디" variant="underlined" />
            <Text underline>아이디나 비밀번호를 잊으셨나요?</Text>
            <Button>로그인</Button>
            <Button variant="outline">회원가입</Button>
        </Flex>
    );
}

export default memo(forwardRef(AuthEmail));
