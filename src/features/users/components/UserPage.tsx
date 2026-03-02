import { Button } from '@/components/ui/Button';

export const UserPage = () => {
  return (
    <div className="space-y-6">
      {/* Header de la Sección */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Usuarios</h2>
          <p className="text-slate-500">Administra los usuarios y sus permisos desde aquí.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Exportar</Button>
          <Button>+ Nuevo Usuario</Button>
        </div>
      </div>

      {/* Placeholder de Contenido */}
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="h-12 w-12 rounded-full bg-slate-100 mb-4 flex items-center justify-center text-slate-400">
            👥
          </div>
          <h3 className="text-lg font-semibold text-slate-900">No hay usuarios cargados</h3>
          <p className="text-sm text-slate-500 mb-6">Empieza por conectar una API o agregar uno manualmente.</p>
          <Button variant="outline" size="sm">Más información</Button>
        </div>
      </div>
    </div>
  );
};