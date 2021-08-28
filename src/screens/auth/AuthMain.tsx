import { Flex } from "native-base";
import React, { forwardRef, memo } from "react";
import DividerText from "../../components/composites/divider/DividerText";
import Button from "../../components/primitives/button/Button";

function AuthMain(props: any, ref: any) {
    return (
        <Flex marginX={10}>
            <Button google={"blue"}>Google로 시작하기</Button>
            <DividerText text={"OR"} />
            <Button variant="outline" rounded={100}>
                이메일로 로그인 / 회원가입
            </Button>
        </Flex>
    );
}

export default memo(forwardRef(AuthMain));
