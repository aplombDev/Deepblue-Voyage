import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <h1>Hello world</h1>
    </QueryClientProvider>
  );
}

export default App;
