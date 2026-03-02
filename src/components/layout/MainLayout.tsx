import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header Genérico */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">B</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Boilerplate Pro</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/users" className="transition-colors hover:text-primary text-primary">Usuarios</a>
            <a href="#" className="transition-colors hover:text-primary text-slate-600">Configuración</a>
          </nav>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="animate-in fade-in duration-500">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} - Arquitectura Profesional Basada en Features
        </div>
      </footer>
    </div>
  );
};