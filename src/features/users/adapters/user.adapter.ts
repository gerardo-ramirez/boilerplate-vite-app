import type { User, UserApiResponse } from "../types";


export const userAdapter = (apiUser: UserApiResponse): User => ({
  id: apiUser.id,
  name: apiUser.name.toUpperCase(), // Ejemplo de transformación
  email: apiUser.email,
  username: apiUser.username
});