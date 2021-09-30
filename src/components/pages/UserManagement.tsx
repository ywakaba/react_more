// import * as React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Center, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { useEffect, useCallback } from "react";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";
import { Spinner } from "@chakra-ui/spinner";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { ModalHeader, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  console.log(users);
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser);
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  const onClickUser = useCallback((id: number) => {
    console.log(`onClickUser id = ${id}`);
    console.log(`users = ${users}`);
    onSelectUser( { id, users, onOpen } );
  }, [users, onSelectUser, onOpen]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) =>
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          )}
        </Wrap>
        )
      }
      {/* <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="じゃけぇ" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="Takumi Okada" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="12345@example.com" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="090-1111-2222" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}/>
    </>
  );
});