import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import SignIn from "./features/Auth/pages/SignIn";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <SignIn /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
