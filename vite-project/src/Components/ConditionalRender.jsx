import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState (false)
    const [name, setName] = useState ("Luis")


    return(
        <>
        
        {x && <h1>Se x for true, sim!</h1>}
        {!x && <h1>Agora x é falso</h1>}
        {name === "Joao" ? (
            <div>
                <h2>
                    Seu é nome Joao
                </h2>
            </div>
        ) : (
            <div>
                <h3>
                    Nome errado!
                </h3>
            </div>
        ) }
        <button onClick={() => setName("Joao")}>Clica aqui!</button>
        </>
    )
    
}
export default ConditionalRender