import React from "react";
import { memo, VFC } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUsermanagement: () => void;
  onClickSetting: () => void;
}
export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickUsermanagement, onClickSetting } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUsermanagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});