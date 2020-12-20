import React ,{useEffect, useState} from "react";
import "./checkout.style.scss";
import {useSelector } from "react-redux";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../Components/strip-button/strip-button.component'
import fire from '../../Firebase/Firebase.utils'


const CheckoutPage = ({ total }) => {


const cartItems=useSelector(state=>state.cart.cartItems);

//console.log(cartItems)

const currentUser=useSelector(state=>state.user.currentUser)

const priceTotal=cartItems.reduce( (accumulatedPrice, cartItem) =>


  accumulatedPrice + (cartItem.price * cartItem.quantity),
  0
)
console.log((priceTotal * 0.035)+priceTotal)
 
 var priveTVAIncluse=(priceTotal * 0.035)+priceTotal;

 const [UserName,setUserName]=useState();

useEffect(()=>{

  fire.auth().onAuthStateChanged(user=>{   // pour dire si l'utilisateur et authentifier ou pas

    if(user){
       
      console.log(user.displayName);
 
     setUserName(user.displayName);

    } })
 
},[UserName])


  return (

    <>
  
    <div className="checkout-page">
       
       {
         UserName && currentUser ?
         <>
         
            <p className="wow slideInRight" data-wow-duration="2s"> Welcome <strong>{UserName}</strong></p> 
           
        
        </>
        :
        <p></p>

       }
       
      <div className="checkout-header">

     

        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Size</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>

      </div>
      
      {cartItems.map(cartItem => <CheckoutItem key= {cartItem.id} cartItem={cartItem} />)}


      <div className="container">
        <div className="form-group">
        <p className="total">TOTAL</p>
        <p>Sous-total:   {priceTotal} €</p>
        <p>Livraison:     3.50 €</p>
        <p className="TVA">TOTAL(TVA incluse): {priveTVAIncluse} €</p>
      
        </div>

      </div>
       

       {
        currentUser?
        (
          <>
      
          <StripeCheckoutButton  price={priveTVAIncluse}/>
          </>
        ):

        (
          <p>Can't buy before Sign UP</p>
        )

       }
     

    </div>
    </>
  );
};
/*const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});*/

export default CheckoutPage;
