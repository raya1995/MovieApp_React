import React ,{useEffect,useRef} from "react";
import "./collection.style.scss";
import CollectionItem from "../../Components/collection-item/collection-item.component";
import { useSelector } from "react-redux";
        
var Items=[];
var ItemsCollection=[];

const CollectionPage = () => {



  const ListSections=useSelector(state=>state.directory.sections);

  const ListCollection=useSelector(state=>state.shop.collections);

 /* console.log(ListCollection[0].title)
  console.log(List[0].title)

  console.log(window.location.pathname)*/

//useEffect(() => {
//},[]);

    var str="/";


    for(let i in ListSections){
     
       
      if(str.concat(ListSections[i].linkURL)===window.location.pathname){

        Items=ListSections[i];

      //  console.log(Items)

       for(let j in ListCollection){

        if(ListCollection[j].title===Items.title){

       //   console.log(ListCollection[j].items)
          
          ItemsCollection=ListCollection[j].items;
        
        }
       //  console.log(ItemsCollection)
       }
      }
    
  };

  
  return (
    <div className="collection-page">
     <h2 className="title">{ItemsCollection.title}</h2>
       <div className="item">
          {
            
          ItemsCollection.length>0?
          <>
          
          { ItemsCollection.map(item=> <CollectionItem key={item.id} item={item} />) }
       </> 
       :<p> Couldn't find any CollectionItem</p>
        }
      </div>
   
    </div>
  );
};


export default CollectionPage;

