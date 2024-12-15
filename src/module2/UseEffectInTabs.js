import React, { useEffect, useState } from "react"

export default function UseEffectInTabs() {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = toggle
      ? "Welcome to little lemon"
      : "using the useEffect Hook"
  }, [toggle])

  return (
    <div>
      <h1>using the useEffect Hook!</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to little Lemon Restaurant</h2>}
    </div>
  )
}

//  useEffect(() => {
//    document.title = toggle
//      ? "Welcome to little lemon"
//      : "using the useEffect Hook"
//  }, [toggle])

/**
 * If the dependency array is empty [], it wont track changes. 
 * If changing to [toggle], useEffect will watch to when there is an update to the value. 
 * Then the usEffect Hook will be run everytime the button is clicked
 */