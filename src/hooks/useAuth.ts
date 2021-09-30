import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
// import { UserProfile } from "../types/UserProfile";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

// 全ユーザー一覧を取得する
export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    // setError(false);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          const isAdmin = res.data.id === 10;
          setLoginUser( { ...res.data, isAdmin });
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
          setLoading(false);
        }
      //   const data = res.data.map((user) => ({
      //     id: user.id,
      //     name: `${user.name}${user.username}`,
      //     email: user.email,
      //     address: `${user.address.city}${user.address.suite}${user.address.street}`
      //   }));
      //   setUserProfiles(data);
      })
      .catch((err) => {
        showMessage({ title: "ログインできません", status: "error" });
        // setError(false);
        console.log(err);
        setLoading(false);
      })
      // .finally(() => setLoading(false));
  }, [history, showMessage, setLoginUser]);
  return { login, loading };
};
