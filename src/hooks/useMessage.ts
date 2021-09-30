import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
// import { UserProfile } from "../types/UserProfile";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
}
export const useMessage = () => {
  const toast = useToast();
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }, []);
  return { showMessage };
};
