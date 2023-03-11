import React from "react";
import styles from "./App.module.scss";
import Table from "../Table/Table";
import useFetch, { IResponse } from "../../hooks/useFetch";
import IFetchedUsers from "../../models/IFetchedUsers";

function App() {
  const response: IResponse<IFetchedUsers> = useFetch<IFetchedUsers>(
    "https://randomuser.me/api/?results=1000&exc=login,registered,cell"
  );

  return (
    <div className={styles.App}>
      <Table users={response.data?.results} isLoading={response.loading} />
    </div>
  );
}

export default App;
