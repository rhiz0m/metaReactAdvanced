import "./App.css"
import AppModule1Forms from "./module1/lab_forms/AppModule1Forms"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import FetchDataAsyncAwait from "./module2/FetchDataAsyncAwait"


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <FetchDataAsyncAwait />
        <AppModule1Forms />
      </div>
    </QueryClientProvider>
  )
}

export default App
