import { QueryClient, QueryClientProvider } from "react-query";
/* import { ReactQueryDevtools } from "react-query/devtools"; */
import { BookBrowser } from "./components";
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main>
          <BookBrowser />
        </main>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
};

export default App;
