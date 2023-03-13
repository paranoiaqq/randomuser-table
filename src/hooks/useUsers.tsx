import { useMemo } from "react";
import IUser from "../models/IUser";

export const useFilteredUsers = (
  users: IUser[],
  filters: string[],
  options: string[]
) => {
  return useMemo(() => {
    console.log(filters, options);

    if (filters.length > 0) {
      return users.filter((user) => {
        let flag = true;

        options.forEach((option) => {
          if (!filters.includes(user[option as keyof typeof user] as string)) {
            flag = false;
          }
        });

        return flag;
      });
    }

    return users;
  }, [filters, users]);
};

export const useUsers = (
  users: IUser[],
  filters: string[],
  query: string,
  options: string[]
) => {
  const filteredUsers = useFilteredUsers(users, filters, options);

  return useMemo(() => {
    return filteredUsers.filter(
      (user) =>
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase()) ||
        user.location.country.toLowerCase().includes(query.toLowerCase()) ||
        user.nat.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.phone.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, filteredUsers]);
};
