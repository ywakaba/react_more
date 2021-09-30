// import * as React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Center, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { useEffect, useCallback, useState, ChangeEvent } from "react";
import { memo, VFC } from "react";
import { Spinner } from "@chakra-ui/spinner";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { ModalHeader, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin, onClose } = props;
  // const onClickUser = useCallback(() => onOpen(), []);

  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
    }, [user]);
  
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  
  const onClickUpdate = () => alert();

  return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUsername}/>
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName}/>
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && ( 
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>)}
        </ModalContent>
      </Modal>
  );
});