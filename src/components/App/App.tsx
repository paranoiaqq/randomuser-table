import React from "react";
import styles from "./App.module.scss";
import Table from "../Table/Table";
import IUser from "../../models/IUser";
import useFetch, { IResponse } from "../../hooks/useFetch";
import IFetchedUsers from "../../models/IFetchedUsers";

const mock = [
  {
    gender: "female",
    name: { title: "Mrs", first: "Ella", last: "Otoole" },
    location: {
      street: { number: 4392, name: "North Road" },
      city: "Clonakilty",
      state: "Longford",
      country: "Ireland",
      postcode: 30050,
      coordinates: { latitude: "3.4002", longitude: "84.8918" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "ella.otoole@example.com",
    dob: { date: "1951-07-23T11:09:16.145Z", age: 71 },
    phone: "031-382-2125",
    id: { name: "PPS", value: "1227799T" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
    },
    nat: "IE",
  },
];

function App() {
  const response: IResponse<IFetchedUsers> = useFetch<IFetchedUsers>(
    "https://randomuser.me/api/?results=1000&exc=login,registered,cell"
  );

  return (
    <div className={styles.App}>
      <Table users={response.data?.results} />
    </div>
  );
}

export default App;
