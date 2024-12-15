import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
/**
 * 
 * To reiterate, the proper way of working with state when it's saved as an object is to:

Copy the old state object using the spread (...) operator and save it into a new variable and 

Pass the new variable to the state-updating function 
 * 
 * 
 */ 

// **** Alternative way to use the spread operator ****// 

// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     const newGreeting = {...greeting}; 
//     newGreeting.greet = "Hello, World-Wide Web"; 
//     setGreeting(newGreeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 