// import * as React from "react";
import React, {useCallback} from "react";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from "@chakra-ui/modal";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecures/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUsermanagement = useCallback(() => history.push("/home/user_management"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  return (
    <>
    <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5}}>
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex"}}>
        <Box pr={4}>
          <Link onClick={onClickUsermanagement}>ユーザー一覧</Link>
        </Box>
        <Link onClick={onClickSetting}>設定</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen}/>
      {/* <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none"}}
        onClick={onOpen}
      /> */}
    </Flex>
    {/* <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
       </DrawerOverlay>
    </Drawer> */}
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUsermanagement={onClickUsermanagement} onClickSetting={onClickSetting}/>
    </>
  );
});