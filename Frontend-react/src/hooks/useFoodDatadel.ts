import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

const deleteData = async (id: FoodData): Promise<void> => {
  await axios.delete(`${API_URL}/quadro/${id}`);
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['avisos-data']);
    },
  });

  return mutation;
}