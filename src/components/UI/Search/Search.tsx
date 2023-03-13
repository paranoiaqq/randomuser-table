import * as React from "react";
import styles from "./Search.module.scss";
import { useEffect, useState } from "react";
import IUser from "../../../models/IUser";
import search from "../../../assets/search.svg";

type Props = {
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ callback }: Props) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    callback(input);
  }, [input]);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Search" onChange={changeHandler} />
      </div>

      <div className={styles.imgContainer}>
        <img src={search} alt="search icon" />
      </div>
    </div>
  );
};

export default Search;
