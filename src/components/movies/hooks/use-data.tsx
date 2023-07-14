import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const useData = (url: string) => {
  const { data, error, isLoading } = useQuery("data", () => fetchData(url));

  return {
    data,
    loading: isLoading,
    error,
  };
};
