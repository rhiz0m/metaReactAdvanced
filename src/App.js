import "./App.css"
import AppModule1Forms from "./module1/lab_forms/AppModule1Forms"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import FetchDataAsyncAwait from "./module2/FetchDataAsyncAwait"
import GoalApp from "./module2/GoalApp"
import GiftCard from "./module2/Lab_giftCard"
import UseEffectInTabs from "./module2/UseEffectInTabs"
import UseReducer from "./module2/UseReducer"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UseReducer />
        <UseEffectInTabs />
        <GiftCard />
        <GoalApp />
        <FetchDataAsyncAwait />
        <AppModule1Forms />
      </div>
    </QueryClientProvider>
  )
}

export default App
