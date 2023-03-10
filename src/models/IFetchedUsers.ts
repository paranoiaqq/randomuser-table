import IUser from "./IUser";

export default interface IFetchedUsers {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: IUser[];
}
