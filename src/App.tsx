import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from 'pages/Home';
import Drawer from 'components/Drawer';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Drawer.Provider>
        <Home />
      </Drawer.Provider>
    </QueryClientProvider>
  );
};

export default App;
