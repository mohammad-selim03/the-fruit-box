import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosCommon from "./useAxios";

export const UsePostApi = (endPoint, onSuccessCallback, onErrorCallback) => {
  const axiosCommon = useAxiosCommon();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosCommon.post(endPoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [endPoint] });
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
    onError: (error) => {
      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },
  });

  return {
    postData: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};
