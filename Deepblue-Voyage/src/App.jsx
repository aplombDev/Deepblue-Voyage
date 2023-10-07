import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <>Hello world</>;
    </QueryClientProvider>
  );
}

export default App;
