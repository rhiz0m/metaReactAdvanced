import "./App.css"
import FeedbackForm from "./FeedbackForm"

function AppTest() {
  const handleSubmit = () => {
    console.log("Form submitted!")
  }

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AppTest
