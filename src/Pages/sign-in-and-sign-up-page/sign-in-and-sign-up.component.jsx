import React from 'react';
import {signInWithGoogle} from '../../Firebase/Firebase.utils'
import { Button } from 'react-bootstrap'
import { withRouter} from "react-router-dom";
import './sign-in-and-sign-up.style.css'

const SignInAndSignUpPage = (props) => {

    const {email,password,setEmail,setPassword,displayName,setdisplayName,handelLogin,handelSingUp,HasAccount,setHasAccount,emailError,passwordError}=props


     console.log(displayName)

    const handelSigIn=()=>{

        handelLogin()

        props.history.push('/hero')
    }
  
  
    const handelSignup=()=>{


        handelSingUp()
  
    }


    return (

   <>
  <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        {/* Icon */}
        <div className="fadeIn first">
  

      { !HasAccount ? 
        (
      <>
  <h2>Register</h2>
       
  

     </>
      ):
      (
          <>
         <h2>Log In</h2>
   
        </>
      )

      }
    


    {                          /// il faut ajouter display nom pour l'afficher
     !HasAccount?
     (
        
    <form>
    
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" autoFocus required value={displayName} onChange={(e)=>setdisplayName(e.target.value)}/>
   
 </form>

     ):
     (
         <p></p>
     )                                
    }

<form>
<input type="text" id="email" className="fadeIn second" name="email" placeholder="email"  autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
   
  
<input type="text" id="password" className="fadeIn second" name="password" placeholder="password" autoFocus required value={password} onChange={(e)=>setPassword(e.target.value)}/>
   
  
    </form>
    

  

     <div className="container">

    {
        HasAccount ?(    
        <>
        <form>
        <input type="submit" className="fadeIn fourth" defaultValue="Sign In" onClick={handelSigIn}/>
         
            <div id="formFooter">
            <a className="underlineHover" href="#">Don't Have account?  <span className="sign-in-out"  onClick={()=>setHasAccount(!HasAccount)}>Register</span></a>
          </div>
</form>
           
        </>
        ):
        (                                      
            <>

<input type="submit" className="fadeIn fourth" defaultValue="Log In" onClick={handelSignup}/>
            
<div id="formFooter">
            <a className="underlineHover" href="#">Have an account ?   <span className="sign-in-out" onClick={()=>setHasAccount(!HasAccount)}>Sign in</span></a>
          </div>


     
            </>
        )
        }

     </div>

           
    

     </div>
</div>
</div>


   </>
    );
}
export default withRouter(SignInAndSignUpPage);