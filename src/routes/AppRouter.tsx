import { Routes, Route, Navigate } from 'react-router-dom';
import { UserPage } from '@/features/users'; // Importación limpia gracias al Barrel

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/users" element={<UserPage />} />
      {/* Si el usuario entra a la raíz, lo mandamos a users */}
      <Route path="/" element={<Navigate to="/users" replace />} />
      {/* 404 - Ruta no encontrada */}
      <Route path="*" element={<div className="p-10 text-center font-bold">404 - Not Found</div>} />
    </Routes>
  );
};