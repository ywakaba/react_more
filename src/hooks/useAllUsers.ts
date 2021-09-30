import axios from "axios";
import { useState, useCallback } from "react";
import { User } from "../types/api/user";
import { UserProfile } from "../types/UserProfile";
import { useMessage } from "./useMessage";

// 全ユーザー一覧を取得する
export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => setLoading(false));
  }, []);
  return { getUsers, users, loading };
};
