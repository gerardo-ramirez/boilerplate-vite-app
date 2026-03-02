Este esquema separa las responsabilidades: El Adapter limpia los datos de la API, el Service hace el fetch, y el Hook maneja el estado.
### comando de git bash para crear:
# 1. Crear estructura de carpetas
mkdir -p src/{api,components/{ui,layout},features/users/{adapters,components,helpers,hooks,services,types},lib,routes}

# 2. Crear archivos base vacíos o con estructura mínima
touch src/api/axios.ts \
      src/components/ui/Button.tsx \
      src/components/layout/MainLayout.tsx \
      src/features/users/index.ts \
      src/features/users/components/UserPage.tsx \
      src/features/users/adapters/user.adapter.ts \
      src/features/users/services/user.service.ts \
      src/features/users/hooks/useUsers.ts \
      src/features/users/types/index.ts \
      src/routes/AppRouter.tsx \
      src/lib/utils.ts

# 3. Mensaje de éxito
echo "✅ Estructura Senior generada con éxito."


----------------------------------------------------------------------------------

📁 Estructura de Carpetas (El Árbol)
src/
├── api/                # Configuración base (Axios instance, Interceptors)
├── components/         # Componentes Globales (Buttons, Inputs, Layouts)
│   ├── ui/             # Componentes atómicos (Shadcn style)
│   └── layout/         # Shell de la app (Navbar, Footer, Sidebar)
├── features/           # Módulos de lógica de negocio (Lógica por dominio)
│   └── users/          # Ejemplo de una Feature: Users
│       ├── adapters/   # Limpia y transforma datos de la API -> UI
│       ├── components/ # Componentes exclusivos de esta feature
│       ├── helpers/    # Funciones puras de lógica para Users
│       ├── hooks/      # React Query mutations/queries
│       ├── services/   # Llamados a la API (fetch/axios)
│       ├── types/      # Interfaces de TS y Schemas de Zod
│       └── index.ts    # BARREL PATTERN (Punto de entrada)
├── routes/             # Definición de rutas (React Router)
├── App.tsx             # Orquestador (Solo llama a Providers y Router)
└── main.tsx            # Punto de entrada de React

📄 1. El Orquestador (src/App.tsx)
 App no renderiza HTML sucio, solo orquestadores y el layout principal.
 import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter'; // Tu orquestador de rutas
import { MainLayout } from './components/layout/MainLayout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

📄 2. El Patrón Adapter (src/features/users/adapters/user.adapter.ts)
Esto es lo que te hace ver como un Senior. Si la API de MELI te devuelve user_first_name_v2, tu adapter lo transforma a firstName.

import { UserApiResponse, User } from '../types';

export const createUserAdapter = (userApi: UserApiResponse): User => ({
  id: userApi.id,
  name: userApi.user_full_name, // Transformación
  email: userApi.email_address,
  role: userApi.security_role.toLowerCase()
});

# === VITE PROFESSIONAL BOILERPLATE ===

## 🏗️ Arquitectura: Feature-Based + Barrel Pattern
Esta arquitectura está diseñada para aplicaciones de gran escala (Enterprise).

### 🔑 Conceptos Clave:
1. **Encapsulamiento**: Cada 'Feature' es un micromundo. Si borrás la carpeta `users`, la app sigue compilando.
2. **Adapters**: Desacoplamos la estructura de la API de la estructura de la UI. Si el Backend cambia un nombre de campo, solo tocás el Adapter.
3. **Zero useEffect**: Toda la lógica de datos se maneja con TanStack Query y eventos de formulario.

### 🛠️ Inicialización:
1. `npm install`
2. `npm run dev`

### 📋 Prompt para IA (Cursor/ChatGPT):
===
Crea una nueva feature llamada [NOMBRE_FEATURE] siguiendo el patrón:
- Un adapter para limpiar los datos de entrada.
- Un service usando fetch/axios.
- Un hook usando TanStack Query.
- Un archivo index.ts (barrel) que exporte solo el componente principal y el hook.
===