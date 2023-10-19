import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const CreationsContext = createContext();

const CreationsProvider = (props) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {        
        axios.get('../../data.json')
        .then((response) => {
           let data = response.data.creaciones
           setProjects(data)
        })
        .catch((err) => {
            console.log(err)
        })




        },[])


    return (
        <CreationsContext.Provider
          value={{
           projects,

          }}
        >
          {props.children}
        </CreationsContext.Provider>
      );



}


export default CreationsProvider;