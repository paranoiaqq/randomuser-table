import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Table from "../Table/Table";
import useFetch, { IResponse } from "../../hooks/useFetch";
import IFetchedUsers from "../../models/IFetchedUsers";
import Search from "../UI/Search/Search";
import IUser from "../../models/IUser";
import Filter from "../UI/Filter/Filter";
import { useUsers } from "../../hooks/useUsers";

const nationalities = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
];

function App() {
  const response: IResponse<IFetchedUsers> = useFetch<IFetchedUsers>(
    "https://randomuser.me/api/?results=3000&exc=login,registered,cell"
  );
  const [users, setUsers] = useState<IUser[]>([]);
  const [genderFilters, setGenderFilters] = useState<string[]>([]);
  const [natFilters, setNatFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [natIsSelected, setNatIsSelected] = useState<boolean>(false);
  const [genderIsSelected, setGenderIsSelected] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const filteredAndSearchedUsers = useUsers(
    users,
    [...genderFilters, ...natFilters],
    searchQuery,
    options
  );

  useEffect(() => {
    const newOptions: string[] = [];

    if (genderIsSelected) newOptions.push("gender");
    if (natIsSelected) newOptions.push("nat");

    setOptions(newOptions);
  }, [natIsSelected, genderIsSelected]);

  useEffect(() => {
    if (response.data?.results.length) {
      setUsers(response.data.results);
    }
  }, [response.loading]);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Search callback={setSearchQuery} />
      </div>

      <div className={styles.filterContainer}>
        <div style={{ marginRight: 20 }}>
          <Filter
            placeholder="Gender equal"
            options={["male", "female"]}
            setFilters={setGenderFilters}
            setIsSelected={setGenderIsSelected}
          />
        </div>

        <Filter
          placeholder={"Nationality"}
          options={nationalities}
          setFilters={setNatFilters}
          setIsSelected={setNatIsSelected}
        />
      </div>

      <Table users={filteredAndSearchedUsers} isLoading={response.loading} />
    </div>
  );
}

export default App;
