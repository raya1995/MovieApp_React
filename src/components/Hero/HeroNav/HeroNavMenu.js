/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import HeroNavLink from "./HeroNavLink";
import React from "react";
import fire from '../../../Firebase/Firebase.utils';
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteCurrentUser } from '../../../Redux/user/user.actions';
import { Link, Redirect } from "react-router-dom";



const HeroNavMenu = () => {
  const { hiddenMenu,activeLink } = useContext(MovieContext);
  const currentUser = useSelector(state => state.user.currentUser);
  console.log(currentUser);
  const dispatch = useDispatch();
  const handelsangOut = () => {

    fire.auth().signOut().then(function () {
      console.log('Signed Out');
      dispatch(deleteCurrentUser(currentUser));
      
    }, function (error) {
      console.error('Sign Out Error', error);
    });
    dispatch(deleteCurrentUser(currentUser));
  
  }
  return (
   
    <div css={styles} className={(hiddenMenu ? "hidden" : "") + " heroNavMenu"}>
      <HeroNavLink btnText="Popular" />
      <HeroNavLink btnText="All Movies" />

      <HeroNavLink btnText="About us"/>
     
     
      {currentUser ? (

<Link onClick={handelsangOut} to='/'>Sign out</Link>


) : (
  <Link to="/">Sign in</Link>
)}
    
    </div>
   
  
  );
};

const styles = css`
  padding-left: 80px;
  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0;
    padding: 20px 50px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 800ms ease-in-out;
    &.hidden {
      left: -600px;
      opacity: 0;
    }
  }
`;


export default HeroNavMenu;
