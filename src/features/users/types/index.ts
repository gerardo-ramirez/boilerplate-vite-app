export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Representa lo que viene de la API (si fuera diferente)
export interface UserApiResponse {
  id: number;
  name: string;
  email: string;
  username: string;
  // ... otros campos que no usaremos
}