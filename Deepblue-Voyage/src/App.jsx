// import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./components/main/Home";

function App() {
  return (
    // <QueryClientProvider client={QueryClient}>
    //   <h1>Hello world</h1>
    // </QueryClientProvider>
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <Home />
    </>
  );
}

export default App;
