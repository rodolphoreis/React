import { useState } from "react"

const ManageData = () => {

    const SomeData = 10
    const [number, setNumber] = useState(14)

    return(
        <>
        <div>
            <h1>Valor: {SomeData} </h1>
            <button onClick={() => {}}> Mudar valor</button>
        </div>

        <div>
        <h1>Valor: {number} </h1>
        <button onClick={() => setNumber(390)}> Mudar valor</button>
        </div>
        </>
    )
}
export default ManageData