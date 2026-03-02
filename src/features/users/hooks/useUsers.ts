import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/user.service";
import { userAdapter } from "../adapters/user.adapter";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await fetchUsers();
      return data.map(userAdapter); // Aplicamos el adapter a cada elemento
    },
  });
};