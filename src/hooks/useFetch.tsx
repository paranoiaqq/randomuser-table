import { useEffect, useState } from "react";

export interface IResponse<T> {
  status: Number;
  statusText: String;
  data: T;
  error: unknown;
  loading: Boolean;
}

const useFetch = <T,>(url: string): IResponse<T> => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error as string);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { status, statusText, data, error, loading } as IResponse<T>;
};

export default useFetch;
