import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter'; 
import { MainLayout } from './components/layout/MainLayout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 🚩 EL BROWSERROUTER DEBE ENVOLVER AL LAYOUT Y AL ROUTER */}
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;