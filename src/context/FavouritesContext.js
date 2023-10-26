import React, { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesProvider = (props) => {


    const [favourites, setFavourites] = useState([]);
   

    
    let cantidadFavoritos = favourites.length

    useEffect(() => {
        
      if (localStorage.getItem("favoritos") != null) {
        let storage = localStorage.getItem("favoritos")
        setFavourites(JSON.parse(storage))
       
    }
      },[])

  
    
    
    const AddFavourite = (favourite) => {

    

      console.log(favourite)
        setFavourites([...favourites, favourite])
        
      localStorage.setItem("favoritos", JSON.stringify([...favourites, favourite]))
      
    }

  

    const ResetFavoritos = () => {
        setFavourites([])
        localStorage.removeItem("favoritos")
       
    }

    const DeleteFavourite = (deletedItem) => {

      let newArray = favourites.filter(item => item.id !== deletedItem.id);
      setFavourites(newArray);
      localStorage.setItem("favoritos", JSON.stringify(newArray));

    }
   

  
    return (
        <FavouritesContext.Provider
          value={{
            favourites,
            cantidadFavoritos,
            AddFavourite,
            ResetFavoritos,
            DeleteFavourite
          }}
        >
          {props.children}
        </FavouritesContext.Provider>
      );


    
}


export default FavouritesProvider;