import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Loading } from './components/organisms/Loading/Loading';
import { AuthProvider } from './context/auth-and-perm/AuthProvider';
import { LoadingContextProvider } from './context/loading';
import './index.css';
import './query.css';
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <LoadingContextProvider>
        <BrowserRouter>
          <AuthProvider>
            <HelmetProvider>
              <ProSidebarProvider>
                <Suspense fallback={<Loading mainTitle='جاري التحميل' />}>
                      <App />
                </Suspense>
              </ProSidebarProvider>
            </HelmetProvider>
          </AuthProvider>
        </BrowserRouter>
    </LoadingContextProvider>
  </QueryClientProvider>
);
