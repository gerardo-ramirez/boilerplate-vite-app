import { useUsers } from "../hooks/useUsers";
import { Button } from "@/components/ui/Button";

export const UserPage = () => {
  const { data: users, isLoading, isError, refetch } = useUsers();

  if (isLoading) return <div className="p-10 text-center">Cargando usuarios...</div>;
  if (isError) return <div className="text-red-500">Error al cargar datos.</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Usuarios (API Real)</h2>
        <Button onClick={() => refetch()}>Refrescar</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <p className="font-bold text-primary">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-xs mt-2 italic">@{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};