 
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxios";

export const useGetApi = (endPoint, isEnabled) => {
  const axiosCommon = useAxiosCommon();
  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: [endPoint],
    enabled: isEnabled || false,
    queryFn: async () => {
      const result = await axiosCommon.get(endPoint);
      return result?.data?.data || result?.data?.plans || [];
    },
    onError: (error) => {
      console.error(`Error fetching data from ${endPoint}:`, error);
    },
  });

  return { data, isError, isLoading, isSuccess };
};
