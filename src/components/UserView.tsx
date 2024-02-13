import { useEffect } from "react";
import { AppState, AppDispatch } from "../state/store";
import { useSelector, useDispatch } from "react-redux";

import { User as UserType } from "../misc/types";
import { fetchUsers } from "../state/slices/userSlice";

const UserView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <p>Loading...</p>}

      {!user.loading && user.error ? <p>Error: {user.error}</p> : null}

      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user: UserType) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
