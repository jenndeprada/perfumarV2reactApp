import React, { useState } from 'react' 

export const ItemCount = ( {stock = 10, initial = 0} ) => {

    const [cantidad, setCantidad] = useState(initial)

    const handleRestar = () => {
        cantidad > initial && setCantidad( cantidad - 1 )
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad( cantidad + 1)
    }

    return (
        <div>
            <button onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar}>+</button>

            <div>
                <button>Agregar</button>
            </div>
        </div>
    )
} 