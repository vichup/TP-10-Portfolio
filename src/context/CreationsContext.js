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


    const GetProyectById = (id) => {
        
        return projects[id-1]

    }


    return (
        <CreationsContext.Provider
          value={{
           projects,
           GetProyectById

          }}
        >
          {props.children}
        </CreationsContext.Provider>
      );



}


export default CreationsProvider;