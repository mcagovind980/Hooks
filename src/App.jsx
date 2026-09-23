// import { useContext, useEffect, useState,createContext ,useRef} from "react"

//  function Use()
//   {
//   const [count,setText]=useState(0);
//  useEffect(()=>
//  {
//  console.log("Effected");

//  },[]

//  )

//   function C()
//   {
   
//   setText(()=>
//   (
// count+1

//   )
//   )
  
//   }

// //   return(
// //     <>
// //     <h1>this is  {text}</h1>
// //     <button onClick={Submit}>Click</button>
// //     </>
// //   )
// // }

// return (
//   <>
//   <h1>Count is here {count}</h1>
//   <button onClick={C}>Click</button>
  
//   </>
// )
// }
  // const createContext=useContext();

// const Ucontext=createContext();

// function Context1()
// {
//   const [user,setUser]=useState("Ram  ");
//   return(<>
//   <Ucontext value={user}>
//   <h1>{`Hello ${user}`}</h1>
//   <Context2/>
//   </Ucontext>
//   </>)
// }
// function Context2()
// {
//   return(
//     <>
//     <h2>Context2</h2>
//     <Context3/>
//     </>
//   )
// }
// function Context3()
// {
//   const user=useContext(Ucontext)
 
//   return(
//     <>
//     <h4>{`this is Context3 ${user}`}</h4>
    
//     </>
//   )
// }

// function App() {
//   const inputRef = useRef();

//   function focusInput() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />

//       <button onClick={focusInput}>
//         Focus
//       </button>
//     </>
//   );
// }
// export default App





// import { useRef, useState } from "react";

// function App()
// {
//   const Current=useRef(0);
//   const [Track,setTrack]=useState(0);
//   function Submit()
//   {
//     Current.Track=Current.Track+1;
//     console.log(Current.Track);
    
//     setTrack("UseREr")
//   }
//   return(

//     <>
//     <h1>this is{Track}</h1>
//     <button onClick={Submit}>Click</button>
    
//     </>
//   )
// }
// export default App;


import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const previousName = useRef("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Current: {name}</h2>

      <h2>Previous: {previousName.current}</h2>
    </>
  );
}

export default App;