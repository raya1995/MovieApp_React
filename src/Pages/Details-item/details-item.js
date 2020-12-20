import React, { useState }  from "react";
import { useSelector } from "react-redux";
import "./details-item.scss";
import DetailPhoto from "../../Components/DetailsPhoto/detailsPhoto";
import CustomeButton from "../../Components/custome-button/custome-button.component";
import  {addItem}  from "../../Redux/cart/cart.actions";
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";

var detail;

  const Details = ({match,addItem}) => {


  // console.log(match.params.detailsId);

  const Items=useSelector(state=>state.shop.collections);

  // console.log(Items)



   Items.map((item,i)=>{

    item.items.map((e,j)=>{
     
        if(e.name===match.params.detailsId){

             
        detail=Items[i].items[j];
          
      //  console.log(detail)
        }

    })
  })

   /*for(let i in Items){

     for(let j in Items[i].items){
    
       if(Items[i].items[j].name===match.params.detailsId){

         
      detail=Items[i].items[j];
      break;
    }

   }
 }*/

 console.log(detail.imageURL);
     
 const[Photo, setPhoto]=useState(detail.imageURL[0]);



 const handelSubmit=()=>{

  detail.imageURL.map((item,i)=>{

 //   console.log(item);
  
    if(detail.imageURL[0]===Photo){
  
       
       
    return setPhoto(detail.imageURL[i])

    } else{
  
      return setPhoto(detail.imageURL[i-1]);
    }
    
  }
    
  )}



 // console.log(detail)   

  return (
   
    
    <>
    
     
   <div className="all-item-details">

    <center>
  
      <div key={detail.id} className="collection-item">
      <div style={{ background: `url(${Photo})`}}  onClick={handelSubmit} className="image"/>
     
      <div className="collection-footer">
        <span className="name">{detail.name}</span>
        <span className="price">{detail.price}</span>
      </div>


      <CustomeButton  onClick={() => addItem(detail)}> Add </CustomeButton>
     

    </div>
  
  
    </center>
     
   
    <DetailPhoto match={match.params.detailsId}/> 

   
 
    </div>    
  
    
</>
  );
};
const mapDispatchToProps = dipstach => ({

  addItem: item => dipstach(addItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(Details));