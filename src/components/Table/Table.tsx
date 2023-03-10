import * as React from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styles from "./Table.module.scss";
import IUser from "../../models/IUser";

type Props = {
  users: IUser[];
};

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => (
  <div className={styles.text} style={style}>
    {index}
  </div>
);

const Table = ({ users }: Props) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className={styles.list}
          height={height}
          itemCount={1000}
          itemSize={() => 64}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default Table;
