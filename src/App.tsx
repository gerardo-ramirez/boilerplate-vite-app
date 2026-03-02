import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600">
          🚀 Boilerplate Vite Senior Ready
        </h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;