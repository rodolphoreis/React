const CarDetails = ({brand, km, color, year, newCar}) => {
    
    return(
        <>
        <ul>
            <li>Marca: {brand}</li>
            <li>Quilometros: {km}</li>
            <li>Cor: {color}</li>
            <li>Ano: {year}</li>
        </ul>
        {newCar === true ? (
            <div>
                <h4>Carro zero quilometros.</h4>
            </div>
        ) : (
            <h4>
                Carro velho!
            </h4>
        )}
        </>
    )
    }
    export default CarDetails