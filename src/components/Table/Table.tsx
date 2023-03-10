import * as React from "react";
import { VariableSizeList as List } from "react-window";
import styles from "./Table.module.scss";

type Props = {};

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => (
  <div className={styles.text} style={style}>
    Row {index}
  </div>
);

const Table = (props: Props) => {
  return (
    <div>
      <List height={150} itemCount={1000} itemSize={() => 64} width={1300}>
        {Row}
      </List>
    </div>
  );
};

export default Table;
