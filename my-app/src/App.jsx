import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { useState } from "react";
function App(){
  const [showSignin,setShowSignin] = useState(false)
  return (
    <>
    {showSignin ? (<Signin/>):(<Signup onSignupSuccess={()=>setShowSignin(true)}/>)}
    </>
  )
}

export default App