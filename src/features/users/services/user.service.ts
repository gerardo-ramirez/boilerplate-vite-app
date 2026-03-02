import type { UserApiResponse } from "../types";

export const fetchUsers = async (): Promise<UserApiResponse[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Error fetching users");
  return response.json();
};