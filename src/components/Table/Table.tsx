import * as React from "react";
import { ListChildComponentProps, FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styles from "./Table.module.scss";
import IUser from "../../models/IUser";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

type Props = {
  users: IUser[];
  isLoading: Boolean;
};

const Row: React.FC<ListChildComponentProps<IUser[]>> = ({
  index,
  style,
  data,
}) => {
  const user = data[index];

  const getDate = (date: string): string => {
    return date.split("T")[0].split("-").reverse().join(".");
  };

  return (
    <tr className={styles.row}>
      <td className={styles.profile}>
        <div className={styles.imgContainer}>
          <img src={user.picture.thumbnail} alt="profile picture" />
        </div>
        <p>{`${user.name.first} ${data[index].name.last}`}</p>
      </td>
      <td>
        <p>{user.location.country}</p>
      </td>
      <td>
        <p>{user.email}</p>
      </td>
      <td>
        <p>{getDate(user.dob.date)}</p>
      </td>
      <td>
        <p>{user.gender}</p>
      </td>
      <td>
        <p>{user.nat}</p>
      </td>
      <td>
        <p>{user.phone}</p>
      </td>
    </tr>
  );
};

const UserList = ({ users }: { users: IUser[] }) => (
  <AutoSizer className={styles.scroll}>
    {({ height, width }) => (
      <List
        className={styles.scroll}
        height={height}
        itemCount={1000}
        itemSize={61}
        width={width}
        itemData={users}
        itemKey={(index, data) => data[index].id.value}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

const Table = ({ users, isLoading }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.tableResponsive}>
        <table>
          <thead className={styles.header}>
            <tr>
              <th>Profile</th>
              <th>Location</th>
              <th>Email</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Phone</th>
            </tr>
          </thead>

          {isLoading ? (
            <div className={styles.spinnerContainer}>
              <LoadingSpinner />
            </div>
          ) : (
            <UserList users={users} />
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
