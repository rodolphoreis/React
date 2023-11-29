export default function Container ({children, nome}){
    return(
        <>
        {children}
        <h4>Meu nome é {nome}</h4>
        </>
    )
}