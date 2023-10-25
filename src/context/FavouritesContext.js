import React, { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesProvider = (props) => {


    const [favourites, setFavourites] = useState([]);
    const [id, setId] = useState(1)

    const cantidadFavoritos = favourites.length

    useEffect(() => {
        
      if (localStorage.getItem("favoritos") != null) {
        let storage = localStorage.getItem("favoritos")
        setFavourites(JSON.parse(storage))
        let idStorage = localStorage.getItem("id")
        setId(idStorage)
    }
      },[])

  
    
    
    const AddFavourite = (favourite) => {

      let favouriteId = {
        ...favourite,
        id
      }


        setFavourites([...favourites, favouriteId])
        
      localStorage.setItem("favoritos", JSON.stringify([...favourites, favouriteId]))
      localStorage.setItem("id",id)
      let nuevaId = parseInt(id) + 1
      setId(nuevaId)
      
    }

  

    const ResetFavoritos = () => {
        setFavourites([])
        setId(1)
        localStorage.removeItem("favoritos")
        localStorage.removeItem("id")
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