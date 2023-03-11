import * as React from "react";
import {
  ListChildComponentProps,
  VariableSizeList as List,
} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styles from "./Table.module.scss";
import IUser from "../../models/IUser";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

type Props = {
  users: IUser[];
};

const Row: React.FC<ListChildComponentProps<IUser[]>> = ({
  index,
  style,
  data,
}) => {
  return <div style={style}>{data[index].name.first}</div>;
};

const UserList = ({ users }: { users: IUser[] }) => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        height={height}
        itemCount={1000}
        itemSize={() => 64}
        width={width}
        itemData={users}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

const Table = ({ users }: Props) => {
  return (
    <div className={styles.container}>
      <div></div>
      {users ? <UserList users={users} /> : <LoadingSpinner />}
    </div>
  );
};

export default Table;
