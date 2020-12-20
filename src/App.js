import { MovieState } from "./Context/MovieContext";
import Hero from "./components/Hero/Hero";
import "./App.css";
import React, { useEffect, useState } from "react";
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import { connect, useDispatch } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.actions";
import fire from '../src/Firebase/Firebase.utils';
import {firestore} from '../src/Firebase/Firebase.utils';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
const App = () => {


  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setdisplayName]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [HasAccount,setHasAccount]=useState(false);
    
  const dispatch=useDispatch();
  
  const clearInput=()=>{
  
    setEmail('');
    setPassword('');
    setdisplayName('');
  }
  
  const clearErrors=()=>{
  
    setEmailError('');
    setPasswordError('');
  }
  
  const handelLogin=()=>{
  
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
    
       //console.log(user);
  
       dispatch(setCurrentUser(user));
       
       console.log(user)
        
       clearInput()
    })
    .catch((error) => {
  
      //var errorCode = error.code;
      var errorMessage = error.message;
      setEmailError(errorMessage)
      console.log(errorMessage)
  
    });
  
  }
  
  
  
  async function handelSingUp(){
  
    clearErrors();
  
  
    await fire.auth().createUserWithEmailAndPassword(email, password)
  
    .catch((error) => {
  
      //  var errorCode = error.code;
        var errorMessage = error.message;
        setEmailError(errorMessage)
        console.log(errorMessage)
    
      });
  
    await fire.auth().currentUser.updateProfile({
      displayName: name
    });
  
    console.log(fire.auth().currentUser)
     
    /*firestore.collection('contacts').add({
      
      displayName:name,
      email:email,
      password:password
  
    })
    .then(()=>{
  
      alert('User has been submitted 👍"')
    })
     
    .catch((error)=>{
  
      alert(error.message)
    })*/
    
    clearInput();
  
  }
  
  
  
  const addListenner=()=>{
  
    fire.auth().onAuthStateChanged(user=>{   // pour dire si l'utilisateur et authentifier ou pas
  
      if(user){
         
        clearInput();
         
        setUser(user);
         
        console.log(user.displayName);
      }else{
  
        setUser('');
       console.log(user)
      }
    });
  
   
  };
  
    useEffect(()=>{
     
     
  
       addListenner();
   
  
  },[]);

  return (
    <>
   
    <Router >
    
        <Route path={"/hero"}  render={()=>(
          <>
      <MovieState>
      <Hero />
      </MovieState>
      </>
      )} />
    <Route  exact path={"/"}
                                  
   render={() => ( <SignInAndSignUpPage email={email} setEmail={setEmail}
     password={password} setPassword={setPassword}
     displayName={name} setdisplayName={setdisplayName}
     handelLogin={handelLogin}
     handelSingUp={handelSingUp}  
     HasAccount={HasAccount} 
     setHasAccount={setHasAccount} 
     emailError={emailError} 
     passwordError={passwordError} />)}
      />
      
    </Router>
 </>



  );
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);