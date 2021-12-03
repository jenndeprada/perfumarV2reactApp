import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/askData";
import { ItemList} from "../ItemList/itemList" 

function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {

        setLoading(true)
        pedirDatos().then((valor_resolucion)=> {
            setItems(valor_resolucion)
        })
        .catch( (err) => {
            console.log("promesa rechazada")
        })
        .finally(() => {
            setLoading(false)
        })
    
    }, [])

    return (
        <div>
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList items={items}/>
            }
            
        </div>
  
    )
    
}





export default ItemListContainer