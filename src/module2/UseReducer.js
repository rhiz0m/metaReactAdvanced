import { useReducer } from "react"

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 }
  if (action.type === "sell_a_meal") return { money: state.money + 10 }
  if (action.type === "celebrity_visit") return { money: state.money + 5000 }
  return state
}

export default function UseReducer() {
  const initialState = { money: 100 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Shopping for ingredients
        </button>
        <button onClick={() => dispatch({ type: "sell_a_meal" })}>
          Serve a meal for the customer
        </button>
        <button onClick={() => dispatch({ type: "celebrity_visit" })}>
          A celebrity visit!
        </button>
      </div>
    </div>
  )
}
